import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
// import { MessagesModule } from './messages/messages.module';
import { HowdiworksModule } from './howdiworks/howdiworks.module';

async function bootstrap() {
  const app = await NestFactory.create(HowdiworksModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
