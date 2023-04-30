import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions: NestApplicationOptions = {
    cors: { 
      origin: "*", 
      methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", 
      "Host", "User-Agent"],
      preflightContinue: false

    }
  }
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api') 
  await app.listen(3002);
}
bootstrap();
