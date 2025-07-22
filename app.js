require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

//Test transporter
async function testTransporter() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Nodemailer",
      text: "Hello! This is a test email to check the transporter.",
    });
    console.log("Test email sent:", info.response);
  } catch (error) {
    console.error("Error sending test email:", error);
  }
}

testTransporter();

app.post("/contact", (req, res) => {
  const { firstName, lastName, company, email, message } = req.body;
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
