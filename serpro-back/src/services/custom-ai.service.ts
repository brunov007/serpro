import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomAiService {

    constructor(){

    }

    getResult(arr: string[]){
        console.log("ok")
    }
}
