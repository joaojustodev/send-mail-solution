import { SendMailUseCase } from "../useCases/Mailer/sendMailUseCase";

export interface MailerServiceDTO {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export class MailerService {
  private data: MailerServiceDTO;

  constructor(data: MailerServiceDTO) {
    this.data = data;
  }

  async sendMail() {
    try {
      return SendMailUseCase.handle(this.data);
    } catch (error) {
      return error;
    }
  }
}
