import { Body, Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OK } from 'http-status';
import { BaseResponse } from 'src/models/reponse/base-response';
import { MainRequest } from 'src/models/request/main-request';

@Controller('main')
export class MainController {

    @Post('data')
    @HttpCode(OK)
    async data(@Body() body: MainRequest): Promise<BaseResponse> {
        console.log(body)
        return {status: true}
    }

    @Post('upload/csv')
    @HttpCode(OK)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<BaseResponse> {
        if(!file) return {status: false}
        if(file.mimetype !== 'text/csv') return {status: false}
        console.log(file)
        //file.buffer
        return {status: true}
    }
}
