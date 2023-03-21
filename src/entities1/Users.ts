import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Persona } from "./Persona";

@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "username", length: 255 })
  username: string;

  @Column("character varying", { name: "email" })
  email: string;

  @Column("character varying", { name: "password", nullable: true })
  password: string | null;

  @Column("boolean", { name: "status", default: () => "true" })
  status: boolean;

  @Column("timestamp without time zone", {
    name: "created_date",
    default: () => "now()",
  })
  createdDate: Date;

  @ManyToOne(() => Persona, (persona) => persona.users)
  @JoinColumn([{ name: "id_persona", referencedColumnName: "idPersona" }])
  idPersona: Persona;
}
