import { MailerServiceDTO } from "../../services/MailerServices";

export class SendMailUseCase {
  static handle(data: MailerServiceDTO) {
    return data;
  }
}
