import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: parseInt(process.env.MAILER_PORT as string),
  secure: true,
  auth: {
    user: process.env.MAILER_AUTH_USER, // generated ethereal user
    pass: process.env.MAILER_AUTH_PASS, // generated ethereal password
  },
});
