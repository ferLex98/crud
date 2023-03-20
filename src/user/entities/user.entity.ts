import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  Entity,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { Persona } from 'src/persona/entities';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: '255', nullable:true})
  username: string;

  @Column({unique: false, nullable:true})
  email: string;

  @Column({nullable:true, select:true})
  password: string;

  @Column({type: 'bool', default: true})
  status: boolean;

  @CreateDateColumn({name:'created_at', type: 'timestamp'})
  createdAt: Date;
  
  @Column()
  idPersona: number;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
  
  
}