import { Module } from '@nestjs/common';
import { CustomAiService } from 'src/services/custom-ai.service';
import { MainService } from 'src/services/main.service';
import { OpenAiService } from 'src/services/open-ai.service';
import { MainController } from './main.controller';

@Module({
    controllers: [MainController],
    providers: [MainService, OpenAiService, CustomAiService]
})
export class MainModule {} 
