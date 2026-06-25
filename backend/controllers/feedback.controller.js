// import nodemailer from "nodemailer";

// export const sendFeedback = async (req, res) => {
//     try {
//         const { message } = req.body;

//         if (!message) {
//             return res.status(400).json({
//                 message: "Message is required"
//             });
//         }

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS
//             }
//         });

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             subject: "New UniNotes Feedback",
//             text: `
// Feedback Received from UniNotes:

// ${message}
//             `
//         });

//         return res.status(200).json({
//             message: "Feedback sent successfully"
//         });

//     } catch (error) {
//         return res.status(500).json({
//             message: `Feedback error ${error}`
//         });
//     }
// };

import nodemailer from "nodemailer";

export const sendFeedback = async (req, res) => {
    console.log("Feedback endpoint hit");

    return res.status(200).json({
        message: "Feedback route works"
    });
};