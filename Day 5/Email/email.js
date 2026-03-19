import nodemailer from "nodemailer" ;
import {template} from "./template.js" ;
import jwt from "jsonwebtoken" ;


// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
 export async function sendEmail (email){
 const   transporter =  nodemailer.createTransport({
   service : 'gmail',
  auth: {
    user: "alaaatef3200@gmail.com",
    pass: "jlgm vtcy cknz sxmq",
  },
});
 let emailtoken = jwt.sign(email , "emailtoken") ;
// Send an email using async/await
(async () => {
  const info = await transporter.sendMail({
    from: '"lab 5" <alaaatef3200@gmail.com>',
    to: email ,
    subject: "Hello ✔",
    html: template(emailtoken), // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
})();
 }