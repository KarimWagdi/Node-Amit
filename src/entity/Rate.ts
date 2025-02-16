import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal")
  value: number;

  @Column()
  comment: string;

  @ManyToOne(() => Product, (product) => product.rate)
  @JoinColumn({ name: "product_id", referencedColumnName: "id" })
  product_id: Product;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user_id: User;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
