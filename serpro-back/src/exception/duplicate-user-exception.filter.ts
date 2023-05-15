import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { DuplicateErrorException } from './models/duplicate-user-exception';

@Catch(DuplicateErrorException)
export class DuplicateErrorExceptionFilter implements ExceptionFilter {
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