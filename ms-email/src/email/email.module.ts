import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailTrasporterProvider } from './email.provider';

@Module({
  providers: [EmailService, EmailTrasporterProvider],
  exports: [EmailService],
})
export class EmailModule {}
