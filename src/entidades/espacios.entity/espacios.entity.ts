import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class EspaciosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @Column('boolean')
  espacioso: boolean;

  @Column('text')
  info: string;

  @CreateDateColumn()
  registrado: Date;

  @UpdateDateColumn()
  modificado: Date;
}
