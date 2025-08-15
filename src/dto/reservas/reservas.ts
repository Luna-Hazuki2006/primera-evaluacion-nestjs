import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class Reservas {
  @IsNotEmpty()
  @IsString()
  ocupador: string;

  @IsNotEmpty()
  @IsInt()
  espacio: number;
}
