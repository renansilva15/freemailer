import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Freemailer')
    .setDescription('A free API for sending emails.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const configService = app.get(ConfigService);

  await app.listen(Number(configService.get('PORT', 3333)));
}
bootstrap();
