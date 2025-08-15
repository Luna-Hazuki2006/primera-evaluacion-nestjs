import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuariosEntity } from 'src/entidades/usuarios.entity/usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guardian } from 'src/auth/guardian/guardian';

@Module({
  imports: [UsuariosEntity, TypeOrmModule.forFeature([UsuariosEntity])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosService],
})
export class UsuariosModule {}
