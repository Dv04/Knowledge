// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Require the cors library
require('dotenv').config();

const app = express();
app.use(cors()); // Use CORS middleware
app.use(express.json());

// POST endpoint for sending emails
app.post('/api/sendmail', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: process.env.EMAIL_USERNAME, // Your email
            pass: process.env.EMAIL_PASSWORD, // Your email password
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_USERNAME, // Your email
        to: 'tatchasanghvi@gmail.com', // Your email
        subject: `New Message from ${req.body.name}`,
        text: `You have received a new message from ${req.body.email}: ${req.body.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error });
    }
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
