import { NextApiRequest, NextApiResponse } from "next";
import { MailerService } from "./../../../services/MailerServices";
import { DataException } from "./../../../Exception/DataException";

interface SendMailRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(500).send("");
  }

  try {
    const data = req.body as SendMailRequest;

    if (
      !data.email ||
      !data.name ||
      !data.subject ||
      !data.phone ||
      !data.message
    ) {
      throw new DataException(
        "Any parameters is missing!! - Please, check the API documentation."
      );
    }

    const mailTransaction = await new MailerService(data).sendMail();

    res.status(200).json(mailTransaction);
  } catch (error) {
    if (error instanceof DataException) {
      res.status(404).json({ error });
    }
    res.status(400).json({ error });
  }
}

export default handler;
