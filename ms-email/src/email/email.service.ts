import { Inject, Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  constructor(
    @Inject('EMAIL_PROVIDER')
    private readonly emailTransporterProvider: Transporter,
  ) {}

  async sendEmail({
    mailOptions,
    from = 'Freemailer',
  }: SendEmailDto): Promise<any> {
    try {
      return await this.emailTransporterProvider.sendMail({
        ...mailOptions,
        from,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
