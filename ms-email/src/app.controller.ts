import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EmailService } from './email/email.service';
import { SendEmailDto } from './email/dto/send-email.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emailService: EmailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('send_email')
  handleSendEmail(@Payload() data: SendEmailDto) {
    this.emailService.sendEmail(data);
  }
}
