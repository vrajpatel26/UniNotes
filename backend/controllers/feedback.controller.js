import nodemailer from "nodemailer";

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
            port: 587,
            secure: false,
            family: 4, // Force IPv4
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("5. Transport created");

        try {
            await transporter.verify();
            console.log("6. SMTP Verified");
        } catch (err) {
            console.error("SMTP VERIFY ERROR:", err);
            return res.status(500).json({
                message: err.message,
            });
        }

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New UniNotes Feedback",
            text: `Feedback Received from UniNotes:\n\n${message}`,
        });

        console.log("7. Email Sent");
        console.log("Message ID:", info.messageId);

        return res.status(200).json({
            message: "Feedback sent successfully",
        });

    } catch (error) {
        console.error("FEEDBACK ERROR:", error);

        return res.status(500).json({
            message: error.message,
        });
    }
};