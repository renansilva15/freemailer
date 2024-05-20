import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('send-email')
  async sendEmail(@Body(ValidationPipe) sendEmailDto: SendEmailDto) {
    await this.appService.sendEmail(sendEmailDto);

    return { message: 'Email add to queue!' };
  }
}
