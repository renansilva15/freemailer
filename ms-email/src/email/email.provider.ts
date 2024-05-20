import { ConfigService } from '@nestjs/config';
import { Transporter, createTransport } from 'nodemailer';

export const EmailTrasporterProvider = {
  provide: 'EMAIL_PROVIDER',
  useFactory: (configService: ConfigService): Transporter => {
    return createTransport({
      service: configService.get('EMAIL_SERVICE'),
      host: configService.get('EMAIL_HOST'),
      port: configService.get('EMAIL_PORT'),
      secure: configService.get('EMAIL_SECURE') === 'true',
      auth: {
        user: configService.get('EMAIL_USER'),
        pass: configService.get('EMAIL_PASS'),
      },
    });
  },
  inject: [ConfigService],
};
