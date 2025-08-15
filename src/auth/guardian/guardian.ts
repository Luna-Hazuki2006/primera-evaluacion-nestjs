import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class Guardian implements CanActivate {
  constructor(private servicioJwt: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.obtenerDelHeader(request);
    if (!token) {
      throw new UnauthorizedException('No tiene el token');
    }
    try {
      const payload = await this.servicioJwt.verifyAsync(token, {
        secret: 'hola mundo',
      });
      request['token'] = payload;
    } catch {
      throw new UnauthorizedException('No tiene el token');
    }
    if (request['token']['tipo'] != 'admin') {
        throw new UnauthorizedException('No tiene permiso por no ser admin');
    }
    return true;
  }

  private obtenerDelHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
