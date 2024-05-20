import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('QUEUE_SERVICE') private readonly clientProxy: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(data: any): Promise<any> {
    return lastValueFrom(this.clientProxy.emit('send_email', data));
  }
}
