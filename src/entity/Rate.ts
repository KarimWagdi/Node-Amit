import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
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

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;
}
