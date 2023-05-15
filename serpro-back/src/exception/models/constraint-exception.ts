import { HttpException } from "@nestjs/common";
import {SERVICE_UNAVAILABLE} from 'http-status'

export class ConstraintErrorException extends HttpException{
    constructor(message: string){
        super(message, SERVICE_UNAVAILABLE)
    }
}