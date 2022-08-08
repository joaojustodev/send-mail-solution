import { NextApiRequest, NextApiResponse } from "next";
import mailer from "nodemailer";

interface SendMailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class ErrorBoundaries {
  err?: any;
  message: string;

  constructor(message: string, err?: any) {
    this.err = err;
    this.message = message;
    this.create();
  }

  private create() {
    return {
      timestamp: new Date(),
      message: this.message,
      error: this.err,
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(500).send("");
  }

  try {
    const data = req.body as SendMailRequest;

    if (!data.email || !data.name) {
      throw new ErrorBoundaries("Name or email is missing!!");
    }

    const transporter = mailer.createTransport({
      host: process.env.MAILER_HOST,
      port: parseInt(process.env.MAILER_PORT as string),
      secure: true,
      auth: {
        user: process.env.MAILER_AUTH_USER, // generated ethereal user
        pass: process.env.MAILER_AUTH_PASS, // generated ethereal password
      },
    });

    const info = await transporter
      .sendMail({
        from: "joaoarantesjob@gmail.com",
        to: "joaoarantesjob@gmail.com",
        subject: "teste",
        html: `
        <head>
        <style> h1 { color: red; } </style>
        </head>
        <h1>NOVO EMAIL</h1>
        <p>${data.email} te enviou um email!</p>
        <p>assunto: ${data.subject}</p>
        <p>mensagem: ${data.message}</p>

      
  `,
      })
      .then((r) => r)
      .catch((err) => {
        if (err) {
          throw new ErrorBoundaries("nao foi possivel enviar o email", err);
        }
      });

    res.status(200).json(info);
  } catch (error) {
    if (error instanceof ErrorBoundaries) {
      res.status(404).json(error);
    }
    res.status(400).json(error);
  }
}

export default handler;
