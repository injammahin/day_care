import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

// Allow React frontend requests
app.use(cors({
    origin: "http://localhost:5173", // Vite frontend URL
    methods: ["POST", "GET"]
}));

app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { parentName, phone, email, childAge, program, scheduleNeed, preferredDate, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: "jessicacastillo@flexiblelearning-solutions.com",
            pass: "Markbell1947!",
        },
    });

    const mailOptions = {
        from: "jessicacastillo@flexiblelearning-solutions.com",
        to: "jessicacastillo@flexiblelearning-solutions.com",
        subject: "New Tour Request Submission",
        text: `
Parent Name: ${parentName}
Phone: ${phone}
Email: ${email}
Child Age: ${childAge}
Program: ${program}
Schedule: ${scheduleNeed}
Preferred Date: ${preferredDate}
Message: ${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to send email." });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));