import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const { contactSection, profile } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      // 1. Direct Gmail SMTP via backend endpoint (/api/contact)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      // If backend gave an explicit error, throw to enter fallback
      throw new Error(data.error || 'Server error occurred');
    } catch (err) {
      console.warn('Gmail API submission error, trying fallback:', err);

      // Fallback: If formspree or web3forms is configured
      try {
        const endpoint = contactSection.formspreeEndpoint;
        if (endpoint && !endpoint.includes('your_')) {
          const fallbackRes = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              _subject: `New Portfolio Message from ${formData.name}`,
              to_email: profile.email,
            }),
          });

          if (fallbackRes.ok) {
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            return;
          }
        }
      } catch (fallbackErr) {
        console.warn('Fallback error:', fallbackErr);
      }

      // Final fallback: open mail client with message pre-filled
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Pill: [ 09 / 09 ] CONTACT */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{contactSection.tag}</span>
          <span className="section-tag-label">{contactSection.label}</span>
        </div>

        {/* Section Header */}
        <div className="contact-header">
          <motion.h2 
            className="contact-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactSection.title}
          </motion.h2>
          <p className="contact-subtitle font-mono">{contactSection.subtitle}</p>
        </div>

        {/* 2-Column: Left FAQ / Right Form */}
        <div className="contact-grid">
          {/* FAQ Column */}
          <div className="contact-faq-column">
            <h3 className="faq-main-heading">FREQUENTLY ASKED</h3>
            <div className="faq-list">
              {contactSection.faq.map((item) => (
                <div key={item.num} className="faq-item">
                  <div className="faq-top">
                    <span className="faq-num font-mono">{item.num}</span>
                    <h4 className="faq-q">{item.q}</h4>
                  </div>
                  <p className="faq-a">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Direct Connect Cards */}
            <div className="direct-cards-row">
              <div className="direct-email-card font-mono">
                <Mail size={16} className="direct-email-icon" />
                <div className="direct-email-text">
                  <span className="direct-label">DIRECT INBOX</span>
                  <a href={`mailto:${profile.email}`} className="direct-address">
                    {profile.email}
                  </a>
                </div>
              </div>

              {profile.linkedInUrl && (
                <a 
                  href={profile.linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="direct-email-card direct-linkedin-card font-mono"
                >
                  <div className="linkedin-icon-bubble">in</div>
                  <div className="direct-email-text">
                    <span className="direct-label">LINKEDIN NETWORK</span>
                    <span className="direct-address">kdurgaprasad11</span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-column">
            <h3 className="form-main-heading">SEND A MESSAGE</h3>

            {status === 'sent' ? (
              <motion.div 
                className="sent-confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={36} className="sent-icon" />
                <h4 className="sent-title">Transmission Received</h4>
                <p className="sent-desc">
                  Thanks for reaching out! Your message was delivered. I'll get back to you shortly at {formData.email || 'your email'}.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="reset-btn font-mono"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form">
                {errorMessage && (
                  <div className="form-error-banner font-mono">
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="contact-name" className="field-label font-mono">YOUR NAME</label>
                  <input 
                    id="contact-name"
                    name="name"
                    type="text" 
                    placeholder="Ada Lovelace"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="editorial-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email" className="field-label font-mono">YOUR EMAIL</label>
                  <input 
                    id="contact-email"
                    name="email"
                    type="email" 
                    placeholder="ada@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="editorial-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message" className="field-label font-mono">MESSAGE</label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project, research, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="editorial-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="send-message-btn font-mono"
                >
                  <span>{status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                  <Send size={13} className={status === 'sending' ? 'animate-fly' : ''} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
