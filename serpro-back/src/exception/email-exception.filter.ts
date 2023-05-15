import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { EmailErrorException } from './models/email-exception';

@Catch(EmailErrorException)
export class EmailExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    let returnMsg = exception.getResponse().toString()

    response
      .status(status)
      .json({
        message: returnMsg,
        timestamp: new Date().toISOString(),
      });
  }
}