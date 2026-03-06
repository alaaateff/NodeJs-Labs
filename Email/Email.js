import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";
import { temp } from "./EmailTemplate.js";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
export async function sendEmail(email){
const transporter = nodemailer.createTransport({
  service : "gmail",
  auth: {
    user: "alaaatef3200@gmail.com",
    pass: "mfym wrbg kmbf qadv",
  },
});

// Send an email using async/await
  let token = jwt.sign({ email }, "emailtoken");

  const info = await transporter.sendMail({
    from: '"myapp" <alaaatef3200@gmail.com>',
    to: email,
    subject: "Hello",
    html: temp(token),
  });

  console.log("Message sent:", info.messageId);
}