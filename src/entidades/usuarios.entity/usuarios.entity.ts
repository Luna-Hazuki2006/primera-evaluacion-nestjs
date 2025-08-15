import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UsuariosEntity {
  @PrimaryColumn('text')
  nombre_usuario: string;

  @Column('text')
  nombre: string;

  @Column('date')
  nacimiento: Date;

  @Column('text')
  genero: string;

  @Column('text')
  sobreTi: string;

  @Column('text')
  contraseña: string;

  @Column('text')
  tipo_usuario: string;

  @CreateDateColumn()
  registrado: Date;

  @UpdateDateColumn()
  modificado: Date;
}
