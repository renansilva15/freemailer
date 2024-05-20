import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { Address } from 'nodemailer/lib/mailer';

export class SendEmailDto {
  mailOptions: MailOptions & {
    to: string | Address | Array<string | Address>;
    subject: string;
    html: string;
  };

  from?: string;
}
