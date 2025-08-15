import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuarios } from 'src/dto/usuarios/usuarios';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/iniciar_sesion')
  async iniciar_sesion(
    @Body() cuerpo: { nombre_usuario: string; contraseña: string },
  ) {
    return await this.service.iniciarSesion(
      cuerpo.nombre_usuario,
      cuerpo.contraseña,
    );
  }

  @Post('/registrar')
  async registrar_usuario(@Body() cuerpo: Usuarios) {
    return await this.service.registrarUsuario(cuerpo);
  }
}
