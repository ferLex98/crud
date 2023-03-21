
import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Publicacion } from "src/publicaciones/entities";
import { User } from "src/user/entities";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export class Persona {
    
    @PrimaryGeneratedColumn({name: 'id_persona'})
    idPersona: number

    @Column("character varying", {
        name: 'identificacion',
        length: 20, 
        unique: true, 
        nullable: true,
    })
    identificacion: string | null;

    @Column("character varying", {
        name: 'tipo_identificacion',
        length: 2,
        nullable: true
    })
    tipoIdentificacion:string | null;

    @Column("character varying",{
        name: 'nombre',
        length:100, 
        nullable: true})
    nombre: string;

    @Column("character varying",{
        name: 'apellido', 
        length:100, 
        nullable: true})
    apellidos: string;

    @Column("integer",{
        name: 'edad',
        nullable: true
    })
    edad: number;

    @Column("character varying",{
        name: 'tag',
        length: 255, 
        nullable: true
    })
    tags: string;
    
    @OneToMany(()=> User, (user)=> user.persona) 
    user:User[];

    @OneToMany(()=> Publicacion, (publicacion)=> publicacion.persona) 
    listaPublicacion:Publicacion[];

    @OneToMany(()=> Etiqueta, (etiqueta)=> etiqueta.persona) 
    listaEtiqueta:Etiqueta[];
  

}
