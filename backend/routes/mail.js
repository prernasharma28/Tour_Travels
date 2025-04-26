import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});

// Email sending function
const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received feedback:', { name, email, message }); // Log the feedback data for debugging

    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: email, // Send the email to the user's email address
        subject: 'Thank you for your feedback!',
        text: `Hello ${name},\n\nThank you for your feedback! We received the following message:\n\n"${message}"\n\nBest regards,\nYour Team`,
    };

    try {
        await transporter.sendMail(mailOptions); // Send email
        console.log('Email sent successfully!');
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Something went wrong while sending the email.', error: error.message });
    }
};

// POST route to handle feedback form submission
router.post('/send', sendEmail);

export default router;