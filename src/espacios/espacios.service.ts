import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Espacios } from 'src/dto/espacios/espacios';
import { EspaciosEntity } from 'src/entidades/espacios.entity/espacios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspaciosService {
  constructor(
    @InjectRepository(EspaciosEntity) private repo: Repository<EspaciosEntity>,
  ) {}

  async listar() {
    return await this.repo.find();
  }

  async buscar(id: number) {
    return await this.repo.findOneBy({ id: id });
  }

  async crear(espacio: Espacios) {
    return await this.repo.save(espacio);
  }
}
