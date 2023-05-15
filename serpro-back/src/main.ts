import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadExceptionFilter } from './exception/bad-request-exception.filter';
import { ConstraintExceptionFilter } from './exception/constraint-exception.filter';
import { DuplicateErrorExceptionFilter } from './exception/duplicate-user-exception.filter';
import { EmailExceptionFilter } from './exception/email-exception.filter';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { NotFoundExceptionFilter } from './exception/not-found-exception.filter';
import { UnauthorizedExceptionFilter } from './exception/unauthorized-exception.filter';

async function bootstrap() {
  if (process.env.NODE_ENV !== 'production') require('dotenv').config()

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
  app.useGlobalFilters(
    new HttpExceptionFilter(), 
    new NotFoundExceptionFilter(), 
    new BadExceptionFilter(), 
    new EmailExceptionFilter(), 
    new UnauthorizedExceptionFilter(), 
    new DuplicateErrorExceptionFilter(), 
    new ConstraintExceptionFilter()
  )
  await app.listen(process.env.BACK_END_PORT);
}
bootstrap();
