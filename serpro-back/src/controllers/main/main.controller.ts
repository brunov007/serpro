import { Body, Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OK } from 'http-status';
import { ChatResponse } from 'src/models/reponse/chat-response.interface';
import { MainRequest } from 'src/models/request/main-request';

@Controller('main')
export class MainController {

    @Post('data')
    @HttpCode(OK)
    async data(@Body() body: MainRequest): Promise<ChatResponse> {
        console.log(body)
        return {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", status: true}
    }

    @Post('upload/csv')
    @HttpCode(OK)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<ChatResponse> {
        console.log(file)
        if(!file) return {status: false}
        if(file.mimetype !== 'text/csv') return {status: false}
        //file.buffer
        return {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", status: true}
    }
}
