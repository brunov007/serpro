import { IsArray, IsNotEmpty } from "class-validator"

export class MainRequest {
    
    // @IsNotEmpty({
    //     message: "Campo dados inválido."
    // })
    //@IsArray()
    readonly dados: string[]
}