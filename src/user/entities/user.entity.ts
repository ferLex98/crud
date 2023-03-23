import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  Entity,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { Persona } from 'src/persona/entities';
import { type } from 'os';


@Entity('users')
export class User {

  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column("character varying",{
    name:'username',
    length: '255', 
    unique: true,
    nullable:false})
  username: string;

  @Column("character varying",{
    name: 'email',
    unique: true, 
    nullable:false})
  email: string;

  @Column("character varying",{
    name: 'password',
    nullable:true, 
    select:true})
  password: string;

  @Column("boolean",{
    name: 'status',
    default: true})
  status: boolean;

  @Column({name: 'id_persona', nullable: true })
  idPersona: number;

  @Column("timestamp without time zone", {
    name: "created_date",
    default: () => "now()",
  })
  createdDate: Date;

  @ManyToOne(()=> Persona, (persona) => persona.user)
  @JoinColumn([{name:'id_persona', referencedColumnName: "idPersona" }])
  persona: Promise<Persona>;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
  
  
}