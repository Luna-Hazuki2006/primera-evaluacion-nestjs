import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(BadRequestException)
export class ReservasFiltroExcepcion implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const original = host.switchToHttp();
    const respuesta = original.getResponse<Response>();
    const request = original.getRequest<Request>();
    const estatus = exception.getStatus();

    respuesta.status(estatus).json({
      estado: 'error',
      codigo: estatus,
      mensaje: exception.message,
      ruta: request.url,
      momento: new Date().toISOString(),
      // modulo: 'reservas',
    });
  }
}
