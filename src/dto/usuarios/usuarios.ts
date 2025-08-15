import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  contraseña: string;

  @IsNotEmpty()
  @IsString()
  tipo_usuario: string;
}
