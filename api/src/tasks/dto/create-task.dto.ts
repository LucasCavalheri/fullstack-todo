import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;
}
