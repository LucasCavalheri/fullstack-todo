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
import { LoginDTO } from './dto/login.dto';
import { JwtAuthGuard } from './jwt.guard';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiConflictResponse({ description: 'Email já cadastrado' })
  @ApiCreatedResponse({ description: 'Usuário cadastrado com sucesso' })
  @Post('register')
  async register(@Body() body: RegisterDTO, @Res() res: Response) {
    const { token, user } = await this.authService.register(body);

    return res.json({
      message: 'Usuário cadastrado com sucesso',
      user,
      token,
    });
  }

  @ApiUnauthorizedResponse({ description: 'Email ou senha inválidos' })
  @ApiOkResponse({ description: 'Login realizado com sucesso' })
  @Post('login')
  async login(@Body() body: LoginDTO, @Res() res: Response) {
    const { token, user } = await this.authService.login(body);

    return res.json({
      message: 'Login realizado com sucesso',
      user,
      token,
    });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOkResponse({ description: 'Perfil do usuário retornado com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
  async profile(@Req() req: any) {
    return this.authService.profile(req.user.userId);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('logout')
  @ApiOkResponse({ description: 'Logout realizado com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
  async logout(@Res() res: Response) {
    return res.json({
      message: 'Logout realizado com sucesso',
    });
  }
}
