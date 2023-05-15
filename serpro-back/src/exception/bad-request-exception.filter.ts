import { ExceptionFilter, Catch, ArgumentsHost, HttpException, NotFoundException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class BadExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    let returnMsg
    const message = (exception.getResponse() as BadRequestException).message

    if(message as any instanceof Array){
      returnMsg = (exception.getResponse() as BadRequestException).message[0]
    }else{
      returnMsg = (exception.getResponse() as BadRequestException).message
    }
    response
      .status(status)
      .json({
        message: returnMsg,
        timestamp: new Date().toISOString(),
      });
  }
}