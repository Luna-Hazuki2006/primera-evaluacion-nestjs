import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ReservasFiltroExcepcion } from './filtro/reservas-filtro-excepcion/reservas-filtro-excepcion';

// ¿Lo puede repetir?
// No lo escuché
// Oh... No
// Pero podría

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ReservasFiltroExcepcion());
  await app.listen(process.env.PORT ?? 3000);
  console.log('http://localhost:3000');
}
void bootstrap();
