import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Terms {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100 })
    name: string;
    
    @Column({ type: 'text' })
    description: string;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp' , nullable: true })
    deletedAt: Date;
}