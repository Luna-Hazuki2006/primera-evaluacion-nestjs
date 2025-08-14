import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteDto } from 'src/dto/cliente.dto/cliente.dto';
import { ClienteActualizarDto } from 'src/dto/cliente_actualizar.dto/cliente_actualizar.dto';
import { ClienteEntity } from 'src/entidades/cliente.entity/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(ClienteEntity) private repo: Repository<ClienteEntity>,
  ) {}

  listar() {
    return this.repo.find();
  }

  buscar(id: number) {
    return this.repo.findOneBy({ id: id });
  }

  crear(cliente: ClienteDto) {
    return this.repo.save(cliente);
  }

  async elimnar(id: number) {
    const cliente = await this.repo.findOneBy({ id: id });
    if (cliente) {
      return await this.repo.remove(cliente);
    }
    throw new NotFoundException('No se encontró el cliente');
  }

  async actualizar(id: number, cliente: ClienteActualizarDto) {
    const real = await this.repo.findOneBy({ id: id });
    if (real) {
      return await this.repo.save({ ...real, ...cliente });
    }
    throw new NotFoundException('No se encontró el cliente');
  }
}
