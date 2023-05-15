import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { NotFoundException } from './models/not-found-exception';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const returnMsg = exception.getResponse().toString()

    response
      .status(status)
      .json({
        message: returnMsg,
        timestamp: new Date().toISOString()
      });
  }
}