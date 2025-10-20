import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'O título da tarefa',
    example: 'Fazer compras'
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;
}
