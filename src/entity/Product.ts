import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
// import { Category } from "./Category";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user_id: number;

  @Column({ type: "int", default: 1 })
  cat_id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "varchar", length: 255 })
  description: string;

  @Column({ type: "int", default: 0 })
  quantity: number;

  @Column({ type: "double", default: 0.0 })
  rate: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  updatedAt: Date;
}
