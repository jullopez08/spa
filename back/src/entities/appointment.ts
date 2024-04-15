import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => User, (user) => user.appointment)
  userId: User[];

  @Column({ type: "enum", enum: ["active", "cancelled"], default: "active" })
  status: "active" | "cancelled";
}
