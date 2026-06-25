import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFeedback = async (req, res) => {
    try {
        console.log("1. Feedback request received");

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required",
            });
        }

        console.log("2. Sending email using Resend...");

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["vrajp4406@gmail.com"],
            subject: "New UniNotes Feedback",
            text: `Feedback Received from UniNotes:\n\n${message}`,
        });

        if (error) {
            console.error("RESEND ERROR:", error);

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }

        console.log("3. Email sent successfully");
        console.log(data);

        return res.status(200).json({
            success: true,
            message: "Feedback sent successfully",
        });

    } catch (error) {
        console.error("FEEDBACK ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};