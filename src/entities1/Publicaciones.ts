import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Persona } from "./Persona";

@Entity("publicaciones", { schema: "public" })
export class Publicaciones {
  @PrimaryGeneratedColumn({ type: "integer", name: "idPublicacion" })
  idPublicacion: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 255,
  })
  description: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @ManyToOne(() => Persona, (persona) => persona.publicaciones)
  @JoinColumn([{ name: "id_persona", referencedColumnName: "idPersona" }])
  idPersona: Persona;
}
