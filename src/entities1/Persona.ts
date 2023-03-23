import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Publicaciones } from "./Publicaciones";
import { Users } from "./Users";

@Index("PK_cf8914fbd4fa0e825e5accc33f2", ["idPersona"], { unique: true })
@Index("UQ_cd9577a78e7334321f9abc96cb4", ["identificacion"], { unique: true })
@Entity("persona", { schema: "public" })
export class Persona {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_persona" })
  idPersona: number;

  @Column("character varying", {
    name: "identificacion",
    nullable: true,
    unique: true,
    length: 20,
  })
  identificacion: string | null;

  @Column("character varying", {
    name: "tipo_identificacion",
    nullable: true,
    length: 2,
  })
  tipoIdentificacion: string | null;

  @Column("character varying", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("character varying", {
    name: "apellido",
    nullable: true,
    length: 100,
  })
  apellido: string | null;

  @Column("integer", { name: "edad", nullable: true })
  edad: number | null;

  @Column("character varying", { name: "tag", nullable: true, length: 255 })
  tag: string | null;

  @OneToMany(() => Publicaciones, (publicaciones) => publicaciones.idPersona)
  publicaciones: Publicaciones[];

  @OneToMany(() => Users, (users) => users.idPersona)
  users: Users[];
}
