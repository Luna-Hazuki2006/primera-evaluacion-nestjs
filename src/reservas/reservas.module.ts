import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { ReservasEntity } from 'src/entidades/reservas.entity/reservas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspaciosModule } from 'src/espacios/espacios.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  providers: [ReservasService],
  controllers: [ReservasController],
  imports: [
    ReservasEntity,
    TypeOrmModule.forFeature([ReservasEntity]),
    EspaciosModule,
    UsuariosModule,
  ],
})
export class ReservasModule {}
