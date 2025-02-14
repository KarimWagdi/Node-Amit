import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100 })
    name: string;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
    
    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'int', default: 0 })
    quantity: number;

    @Column({ type: 'varchar', length: 255 })
    image: string;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    updatedAt: Date;
    
}