import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/dto/usuarios/usuarios';
import { UsuariosEntity } from 'src/entidades/usuarios.entity/usuarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuariosEntity) private repo: Repository<UsuariosEntity>,
  ) {}

  async listar() {
    return await this.repo.find();
  }

  async buscar(nombre_usuario: string) {
    return await this.repo.findOneBy({ nombre_usuario: nombre_usuario });
  }

  async crear(usuario: Usuarios) {
    return await this.repo.save(usuario);
  }
}
