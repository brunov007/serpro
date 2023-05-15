import { HttpException } from "@nestjs/common";
import {INTERNAL_SERVER_ERROR} from 'http-status'

export class EmailErrorException extends HttpException{
    constructor(message: string){
        super(message, INTERNAL_SERVER_ERROR)
    }
}