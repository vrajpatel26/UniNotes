import nodemailer from "nodemailer";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

export const sendFeedback = async (req, res) => {
    try {
        console.log("1. Feedback request received");

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                message: "Message is required",
            });
        }

        console.log("2. Message:", message);
        console.log("3. EMAIL_USER:", process.env.EMAIL_USER);
        console.log("4. PASS LENGTH:", process.env.EMAIL_PASS?.length);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("5. Transport created");
        console.log("6. Sending email...");

        const info = await Promise.race([
            transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: "New UniNotes Feedback",
                text: `Feedback Received from UniNotes:\n\n${message}`,
            }),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("SENDMAIL TIMEOUT")), 10000)
            ),
        ]);

        console.log("7. Email sent successfully");
        console.log("Message ID:", info.messageId);

        return res.status(200).json({
            success: true,
            message: "Feedback sent successfully",
        });

    } catch (error) {
        console.error("FEEDBACK ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};