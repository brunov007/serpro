import { Module } from '@nestjs/common';
import { LoginModule } from './controllers/login/login.module';
import { MainModule } from './controllers/main/main.module';

@Module({
  imports: [LoginModule, MainModule]
})
export class AppModule {}
