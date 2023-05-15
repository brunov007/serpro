import { Body, Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OK } from 'http-status';
import { ChatResponse } from 'src/models/reponse/chat-response.interface';
import { MainRequest } from 'src/models/request/main-request';
import { CustomAiService } from 'src/services/custom-ai.service';
import { MainService } from 'src/services/main.service';
import { OpenAiService } from 'src/services/open-ai.service';

@Controller('main')
export class MainController {

    constructor(
        private mainService: MainService,
        private openAIService: OpenAiService,
        private customAiService: CustomAiService
    ) {}

    @Post('data')
    @HttpCode(OK)
    async data(@Body() body: MainRequest): Promise<ChatResponse> {
        
        const {dados} = body

        const text = await this.openAIService.chatCompletion(dados) 

        return {
            text: text, 
            report: {
                laws: [], //TODO possiveis leis
                fields: this.customAiService.getResult(dados)
            },
            date: DateUtils.nowFormated()
        }
    }

    //FIXME
    @Post('upload/csv')
    @HttpCode(OK)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<ChatResponse> {
        
        //TODO thrown Error
        //if(!file) return {status: false, message: "Necessário adicionar um arquivo de fomato .csv"}
        //if(file.mimetype !== 'text/csv') return {status: false, message: "Formato inválido."}
        
        const dados = StringUtils.dataClean(file.buffer.toString())
        
        const text = await this.openAIService.chatCompletion(dados)

        return {
            text: text, 
            report: {
                laws: [], //TODO
                fields: this.customAiService.getResult(dados)
            },
            date: DateUtils.nowFormated()
        }
    }
}
