// Core
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
// Modules
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3020);
}

bootstrap();
