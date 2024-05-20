import { Inject, Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  constructor(
    @Inject('EMAIL_PROVIDER')
    private readonly emailTransporterProvider: Transporter,
    @Inject('EMAIL_USER')
    private readonly emailUser: string,
  ) {}

  async sendEmail({
    sender = 'Freemailer',
    ...sendEmailDto
  }: SendEmailDto): Promise<any> {
    try {
      return await this.emailTransporterProvider.sendMail({
        ...sendEmailDto,
        from: { name: sender, address: this.emailUser },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
