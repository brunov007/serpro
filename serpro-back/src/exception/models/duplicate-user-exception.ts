import { HttpException } from "@nestjs/common";
import {BAD_REQUEST} from 'http-status'

export class DuplicateErrorException extends HttpException{
    constructor(message: string){
        super(message, BAD_REQUEST)
    }
}