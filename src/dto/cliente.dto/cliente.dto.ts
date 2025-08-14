import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ClienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
