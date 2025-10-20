import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import type { Response } from 'express';
import { env } from 'src/env';
import { LoginDTO } from './dto/login.dto';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDTO, @Res() res: Response) {
    const { token, user } = await this.authService.register(body);

    return res.json({
      message: 'Usuário cadastrado com sucesso',
      user,
      token,
    });
  }

  @Post('login')
  async login(@Body() body: LoginDTO, @Res() res: Response) {
    const { token, user } = await this.authService.login(body);

    return res.json({
      message: 'Login realizado com sucesso',
      user,
      token,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() req: any) {
    return this.authService.profile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('logout')
  async logout(@Res() res: Response) {
    return res.json({
      message: 'Logout realizado com sucesso',
    });
  }
}
