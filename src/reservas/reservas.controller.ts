import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { Reservas } from 'src/dto/reservas/reservas';
import { ReservasFiltroExcepcion } from 'src/filtro/reservas-filtro-excepcion/reservas-filtro-excepcion';

@UseFilters(ReservasFiltroExcepcion)
@Controller('reservas')
export class ReservasController {
  constructor(private readonly service: ReservasService) {}

  @Get()
  async listar() {
    return await this.service.listar();
  }

  @Get(':id')
  async buscar(@Param('id') id: number) {
    return await this.service.buscar(id);
  }

  @Post()
  async crear(@Body() cuerpo: Reservas) {
    return await this.service.crear(cuerpo);
  }
}
