import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id : number

    @Column('text')
    nombre : string

    @Column('text')
    email : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date
}
