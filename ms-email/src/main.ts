import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as express from 'express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: 'emails_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();

  const dummyServer = express()

  dummyServer.get('/', (req, res) => {
    res.send('Hello World!')
  })

  const configService = app.get(ConfigService)

  const port = Number(configService.get('PORT', 3334))

  dummyServer.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  })
}
bootstrap();
