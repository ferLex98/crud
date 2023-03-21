import { Persona } from "src/persona/entities";
import { Publicacion } from "src/publicaciones/entities";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('etiquetas')
export class Etiqueta {
    @PrimaryGeneratedColumn({name: "id_etiqueta" })
    id_etiqueta: number;

    @Column("integer", {name: "id_publicacion", nullable:true })
    id_publicacion:number;

    @Column("integer", {name: "id_persona", nullable:true})
    id_persona:number;

    @Column("varchar", {name: "descripcion", nullable:true})
    descripcion: string;

    @Column("timestamp without time zone", {
        name:'created_at',
        default: () => "now()",
    })
    createdAt: Date;

    @ManyToOne(()=> Persona, (persona) => persona.listaEtiqueta)
    @JoinColumn([{name:'id_persona', referencedColumnName: "idPersona" }])
    persona:Promise<Publicacion>;
    
    @ManyToOne(()=> Publicacion, (publicacion) => publicacion.etiqueta)
    @JoinColumn([{name:'id_publicacion', referencedColumnName: "idPublicacion" }])
    publicacion:Promise<Publicacion>;
}
