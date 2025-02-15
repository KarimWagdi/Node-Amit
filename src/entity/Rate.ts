import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
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
  product: Product;

  @ManyToOne(() => User, (user) => user.ratings)
  user: User;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
