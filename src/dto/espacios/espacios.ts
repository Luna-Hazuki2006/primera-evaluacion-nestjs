import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class Espacios {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsBoolean()
  espacioso: boolean;

  @IsString()
  info: string;
}
