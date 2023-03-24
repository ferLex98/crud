import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Persona } from "src/persona/entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('publicaciones')
export class Publicacion {

    @PrimaryGeneratedColumn({name: "id_publicacion" })
    idPublicacion: number;
   
    @Column("character varying",{
        length:'255',
        nullable: true
    })
    description:string;

    @Column("timestamp without time zone", {
        name:'created_at',
        default: () => "now()",
    })
    createdAt: Date;

    @Column("integer", {name: "id_persona",  nullable:true, })
    idPersona:number;

    @ManyToOne(()=> Persona, (persona) => persona.listaPublicacion)
    @JoinColumn({name:'id_persona' , referencedColumnName: "idPersona" })
    persona: Persona;

    @OneToMany(()=> Etiqueta, (etiqueta) => etiqueta.publicacion)
    etiqueta: Etiqueta



}
