import { BaseResponse } from "./base-response";

export interface ChatResponse extends BaseResponse{
    text: string,
    report: Object
    date: any
}