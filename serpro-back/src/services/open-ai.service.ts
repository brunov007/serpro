import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from "openai";

@Injectable()
export class OpenAiService {

    openai: OpenAIApi

    constructor(){
        const configuration = new Configuration({
            organization: String(process.env.ORGANIZATION),
            apiKey: String(process.env.OPENAI_API_KEY),
        });

        this.openai = new OpenAIApi(configuration);
    }
}
