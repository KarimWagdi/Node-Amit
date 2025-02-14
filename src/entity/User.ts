import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    MODERATOR = "moderator",
  }

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  gender!:string;

  @Column({ type: "date", nullable: true })
  birthdate!: Date;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role!: UserRole;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
