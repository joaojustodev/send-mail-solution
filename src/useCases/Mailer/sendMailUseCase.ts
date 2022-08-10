import { MailerServiceDTO } from "../../services/MailerServices";
import { transporter } from "../../lib/nodemailer";

export class SendMailUseCase {
  static async handle(data: MailerServiceDTO) {
    try {
      const info = await transporter.sendMail({
        from: process.env.MAILER_FROM,
        to: process.env.MAILER_TO,
        subject: "New email from contact",
        html: `
          <head>
          <style>
          main.maibn {
            width: 100%;
            height: 100%;
            background: #F4F4F4;
          }

          header {
            background: purple;
            width: 100%;
            height: 150px;
            display:flex;
            align-items:center;
            justify-content:center;
          }
          
          header h1 {
            color: #fff;
            margin: 0 auto;
            text-transform: uppercase;
            font-family: -apple-system, sans-serif;
          }
    

          main div {
            margin-top: 50px;
          }
        </style>
          </head>
          <header>
            <h1>NEW CONTACT</h1>
          </header>
          <main>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Subject: ${data.subject}</p>
            <p>Message: ${data.message}</p>
          </main>
        `,
      });

      return info;
    } catch (error) {
      throw new Error("Something was wrong!!!");
    }
  }
}
