import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from 'src/dto/usuarios/usuarios';
import { Guardian } from 'src/auth/guardian/guardian';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly service: UsuariosService) {}

  @UseGuards(Guardian)
  @Get()
  async listar() {
    return await this.service.listar();
  }

  @Get(':nombre_usuario')
  async buscar(@Param('nombre_usuario') nombre_usuario: string) {
    return await this.service.buscar(nombre_usuario);
  }

  @Post()
  async crear(@Body() cuerpo: Usuarios) {
    return await this.service.crear(cuerpo);
  }
}
