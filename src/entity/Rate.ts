import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal", { precision: 5, scale: 2 })
  value: number;

  @Column()
  comment: string;

  @ManyToOne(() => Product, (product) => product.rate)
  product: Product;
}
