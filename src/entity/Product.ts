import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { CartItems } from "./CartItems";
import { Categories } from "./Categories";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user_id: number;

  @ManyToOne(() => Categories, (category) => category.id)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category_id: Categories;

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

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
  
  @DeleteDateColumn({ type: 'timestamp' , nullable: true })
  deletedAt: Date;

  @OneToMany(() => CartItems, (cartItems) => cartItems.product_id)
  cartItems: CartItems[];
}
