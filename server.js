import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Create nodemailer transporter using Gmail SMTP service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, ''),
  },
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('[Gmail SMTP Verification Failed]:', error.message);
  } else {
    console.log('[Gmail SMTP Ready]: Transporter configured successfully for', process.env.GMAIL_USER);
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    }

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `[Portfolio Inquiry] New transmission from ${name}`,
      text: `You received a new portfolio inquiry:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0c0c0e; color: #f5f4f2; border: 1px solid #282834; border-radius: 8px;">
          <h2 style="color: #ff3838; margin-top: 0; font-size: 20px;">⚡ New Portfolio Transmission</h2>
          <hr style="border: none; border-top: 1px solid #202028; margin: 16px 0;" />
          <p style="margin: 8px 0;"><strong style="color: #9c9a96;">Sender:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong style="color: #9c9a96;">Email:</strong> <a href="mailto:${email}" style="color: #ff5e36;">${email}</a></p>
          <div style="margin-top: 20px; padding: 16px; background: #14141a; border-left: 3px solid #ff3838; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #f5f4f2;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #5c5a58; font-family: monospace;">Transmitted via Portfolio Contact API</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, message: 'Email sent successfully via Gmail SMTP!' });
  } catch (error) {
    console.error('[Error sending email]:', error);
    return res.status(500).json({ error: error.message || 'Failed to send message via Gmail SMTP.' });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
