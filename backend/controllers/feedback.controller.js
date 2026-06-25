import nodemailer from "nodemailer";

export const sendFeedback = async (req, res) => {
    try {
        console.log("1. Feedback request received");

        const { message } = req.body;

        console.log("2. Message:", message);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("3. Transport created");

        await transporter.verify();

        console.log("4. SMTP Verified");

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New UniNotes Feedback",
            text: message,
        });

        console.log("5. Email Sent");

        return res.status(200).json({
            message: "Feedback sent successfully",
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
};