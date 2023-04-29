import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { OK } from 'http-status';
import { LoginResponse } from 'src/models/reponse/login-response.interface';
import { LoginRequest } from 'src/models/request/login-request';

@Controller('auth')
export class LoginController {
    
    // constructor(
    //     private loginService: LoginService,
    //     private userService: UserService,
    // ) {}
    
    @Post('sign-in')
    @HttpCode(OK)
    async authenticate(@Body() loginUser: LoginRequest): Promise<LoginResponse> {
        console.log(loginUser)
        return {status: true}
    }
}
