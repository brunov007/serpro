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
        const dados = body
        return {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", status: true}
    }

    @Post('upload/csv')
    @HttpCode(OK)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<ChatResponse> {
        if(!file) return {status: false, message: "Necessário adicionar um arquivo de fomato .csv"}
        if(file.mimetype !== 'text/csv') return {status: false, message: "Formato inválido."}
        const dados = this.dataClean(file.buffer.toString())
        /*
        dados
        [
            'usuario',   'marca',
            'case',      'salario',
            'dentro',    'gmail',
            'interaçao', 'junho',
            'arroba'
        ]
        */
        return {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", status: true}
    }

    private dataClean(s: string){
        return s.split(",")
                .map(item => item.replace(new RegExp("\\r\\n", "g"), ""))
                .filter(item => item !== '')
    }
}
