import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class Usuarios {
  @IsNotEmpty()
  @IsString()
  nombre_usuario: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsDateString()
  nacimiento: Date;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsString()
  sobreTi: string;
}
