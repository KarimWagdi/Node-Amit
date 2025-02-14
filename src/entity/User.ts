import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Product } from "./Product";

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

  @OneToMany(() => Product, (product) => product.user_id)
  product: Product[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
  
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
