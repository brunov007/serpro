import { HttpException } from "@nestjs/common";
import {NOT_FOUND} from 'http-status'

export class NotFoundException extends HttpException{
    constructor(message: string){
        super(message, NOT_FOUND)
    }
}