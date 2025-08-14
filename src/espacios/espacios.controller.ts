import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EspaciosService } from './espacios.service';
import { Espacios } from 'src/dto/espacios/espacios';

@Controller('espacios')
export class EspaciosController {
  constructor(private readonly service: EspaciosService) {}

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscar(@Param('id') id: number) {
    return this.service.buscar(id);
  }

  @Post()
  crear(@Body() cuerpo: Espacios) {
    return this.service.crear(cuerpo);
  }
}
