import { ExceptionFilter, Catch, ArgumentsHost, HttpException, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    let returnMsg = exception.getResponse().toString()

    console.log((exception.getResponse() as HttpException).message)

    response
      .status(status)
      .json({
        message: returnMsg,
        timestamp: new Date().toISOString(),
      });
  }
}