import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ReservasEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  ocupador: string;

  @Column('integer')
  espacio: number;

  @CreateDateColumn()
  registrado: Date;

  @UpdateDateColumn()
  modificado: Date;
}
