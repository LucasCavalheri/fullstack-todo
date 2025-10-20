import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO {
  @ApiProperty({ example: 'Lucas' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'lucas@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123123' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
