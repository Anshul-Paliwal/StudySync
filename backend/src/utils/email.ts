import nodemailer from 'nodemailer';
import { env } from '../config/env';

export const sendEmail = async (to: string, subject: string, text: string) => {
    if (!env.EMAIL_USER || !env.EMAIL_PASS) {
        console.warn('Email credentials not found. Skipping email sending.');
        return;
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
        },
        // Force IPv4 to avoid timeouts on some cloud providers
        family: 4,
        // Add timeouts and logging for debugging
        connectionTimeout: 10000,
        greetingTimeout: 5000,
        logger: true,
        debug: true,
    } as nodemailer.TransportOptions);

    const mailOptions = {
        from: env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
};
