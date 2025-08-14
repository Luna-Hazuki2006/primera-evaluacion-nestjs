import { Module } from '@nestjs/common';
import { EspaciosService } from './espacios.service';
import { EspaciosController } from './espacios.controller';
import { EspaciosEntity } from 'src/entidades/espacios.entity/espacios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EspaciosEntity, TypeOrmModule.forFeature([EspaciosEntity])],
  providers: [EspaciosService],
  controllers: [EspaciosController],
  exports: [EspaciosService],
})
export class EspaciosModule {}
