import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservas } from 'src/dto/reservas/reservas';
import { ReservasEntity } from 'src/entidades/reservas.entity/reservas.entity';
import { EspaciosService } from 'src/espacios/espacios.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Repository } from 'typeorm';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(ReservasEntity) private repo: Repository<ReservasEntity>,
    private readonly servicioEspacio: EspaciosService,
    private readonly servicioUsuario: UsuariosService,
  ) {}

  async listar() {
    return await this.repo.find();
  }

  async buscar(id: number) {
    return await this.repo.findOneBy({ id: id });
  }

  async crear(reserva: Reservas) {
    const espacio = await this.servicioEspacio.buscar(reserva.espacio);
    if (!espacio)
      throw new BadRequestException('No existe ese espacio para la reserva');
    const usuario = await this.servicioUsuario.buscar(reserva.ocupador);
    if (!usuario)
      throw new BadRequestException('No existe ese usuairo para la reserva');
    return await this.repo.save(reserva);
  }
}
