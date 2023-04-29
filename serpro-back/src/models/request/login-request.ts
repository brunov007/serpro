import { IsNotEmpty, IsString, IsEmail, Length,} from 'class-validator';

export class LoginRequest {

    @IsString()
    @IsNotEmpty({
        message: "Email inválido."
    })
    // @IsEmail({}, {
    //     message: "Email inválido."
    // })
    // @Length(4,255,{
    //     message: "Campo email deve conter no mínimo 4 caracteres e no máximo 255."
    // })
    readonly email: string
  
    
    @IsString()
    // @IsNotEmpty({
    //     message: "Senha inválida."
    // })
    // @Length(6,10, {
    //     message: "Campo senha deve conter no mínimo 6 caracteres e no máximo 10."
    // })
    readonly password: string
}
