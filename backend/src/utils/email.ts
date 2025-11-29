import nodemailer from 'nodemailer';
import { env } from '../config/env';

export const sendEmail = async (to: string, subject: string, text: string) => {
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
