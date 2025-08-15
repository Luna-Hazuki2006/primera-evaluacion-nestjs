import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Usuarios } from 'src/dto/usuarios/usuarios';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly servicoUsuario: UsuariosService,
    private servicioJwt: JwtService,
  ) {}

  async iniciarSesion(nombre_usuario: string, contraseña: string) {
    const usuario = await this.servicoUsuario.buscar(nombre_usuario);
    if (!usuario) {
      throw new BadRequestException('No existe un usuario con ese nombre');
    }
    let verdad = await compare(contraseña, usuario.contraseña);
    if (verdad) {
      const info = {
        nombre_usuario: nombre_usuario,
        tipo: usuario.tipo_usuario,
      };
      return { token: await this.servicioJwt.signAsync(info) };
    }
    throw new UnauthorizedException('La contraseña es incorrecta');
  }

  async registrarUsuario(cuerpo: Usuarios) {
    return await this.servicoUsuario.crear(cuerpo);
  }
}
