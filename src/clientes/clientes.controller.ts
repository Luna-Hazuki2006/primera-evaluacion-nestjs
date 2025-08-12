import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClienteDto } from 'src/dto/cliente.dto/cliente.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly service : ClientesService) {}

    @Get() 
    listar() {
        return this.service.listar()
    }

    @Get(':id')
    buscar(@Param('id') id : number) {
        return this.service.buscar(id)
    } 

    @Post()
    crear(@Body() cuerpo : ClienteDto) {
        return this.service.crear(cuerpo)
    }

    @Delete(':id') 
    eliminar(@Param('id') id : number)
    {
        return this.service.elimnar(id)
    }

    @Put(':id') 
    actualizar(@Param('id') id : number, @Body() cuerpo : ClienteDto) {
        return this.service.actualizar(id, cuerpo)
    }
}
