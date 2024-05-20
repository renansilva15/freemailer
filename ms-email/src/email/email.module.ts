import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailTrasporterProvider } from './email.provider';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    EmailService,
    EmailTrasporterProvider,
    {
      provide: 'EMAIL_USER',
      useFactory: async (configService: ConfigService) =>
        configService.get('EMAIL_USER'),
      inject: [ConfigService],
    },
  ],
  exports: [EmailService],
})
export class EmailModule {}
