import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Credential } from "./credential";
import { Appointment } from "./appointment";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  nDni: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credentialsId: Credential;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Appointment, (appointment) => appointment.userId)
  appointment: Appointment[];
}
