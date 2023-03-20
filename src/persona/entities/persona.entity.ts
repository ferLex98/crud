import { type } from "os";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export class Persona {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 20, unique: true, nullable: true})
    identificacion: string;

    @Column({type: 'varchar', length: 2, nullable: true})
    tipoIdentificacion:string;

    @Column({type: 'varchar', length:100, nullable: true})
    nombre: string;

    @Column({type: 'varchar', length:100, nullable: true})
    apellidos: string;

    @Column({type: 'int',nullable: true})
    edad: number;

    @Column({type: 'varchar', length: 255, nullable: true})
    tags: string;

    @Column({nullable: true})
    idPersona: number;

}
