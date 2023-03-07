import express from 'express';
import { createTransport } from 'nodemailer';


    // create a transporter object for sending emails
    const transporter = createTransport({
        service: 'gmail',
        auth: {
          user: 'ifox.text.test@gmail.com',
          pass: 'voxyowdzrfllqcxy'
        }
      })
      
export const sendEmail = async (req,res) => {

      try {
        const { name, surname, tel, email, city, country, message } = req.body;
    
        const mailOptions = {
          from: 'ifox.text.test@gmail.com',
          to: 'sildi.t2004@gmail.com',
          subject: 'Contact Form Submission',
          text: `Name: ${name}\n Surname:${surname}\n Tel: ${tel}\n Email: ${email}\n City:${city}\n Country:${country}\n Message:${message}`,
          attachments: [
            {
              filename: 'cv.pdf',
              content: req.file.buffer
            }
          ]
        };
    
        // send the email
        const info = await transporter.sendMail(mailOptions);
    
        console.log(`Email sent: ${info.messageId}`);
        res.status(200).send({ message: 'Email sent successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to send email' });
      }
};


export const sendContact = async (req,res) => {

    try {
      const { name, email, message } = req.body;
  
      const mailOptions = {
        from: 'ifox.text.test@gmail.com',
        to: 'sildi.t2004@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\n Email: ${email}\n Message:${message}`,
      };
  
      // send the email
      const info = await transporter.sendMail(mailOptions);
  
      console.log(`Email sent: ${info.messageId}`);
      res.status(200).send({ message: 'Email sent successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Failed to send email' });
    }
}