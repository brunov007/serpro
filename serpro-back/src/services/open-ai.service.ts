import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi, CreateChatCompletionRequest } from "openai";

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

    /*
    async listModels(){
        const result = await this.openai.listModels()
        
        if(result.status >= 200 && result.status < 300){
            const {data} = result.data
            return {status: true, list:data}
        }

        return {status: false, list:[]}
    }
    */

    async chatCompletion(arr: string[]){
        let text = ""
        const s = `Describe whether these data: ${arr.join(",")} are related to the LGPD`

        const request : CreateChatCompletionRequest = {
            model: "gpt-3.5-turbo",
            messages: [
                {role: "user", content: s}
            ],
            n: 1,
            temperature: 0.2,
            top_p: null,
            max_tokens: 100 //FIXME default é 4096
        }

        try{
            const result = await this.openai.createChatCompletion(request)
    
            const {choices} = result.data
            text += choices[0].message.content.replace(new RegExp("\\n", "g"), "")

        }catch(e){
            if(e.response){
                console.log(e.response.data)
                if(e.response.status === 429){
                    return {status: false, text: e.response.data.error.message}
                }else{
                    return {status: false, text: String(e.response.data)}
                }
            }
            text += "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }

        return {status: true, text: text}
    }
}
