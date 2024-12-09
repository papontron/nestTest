import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: '60', nullable: false })
  name: string;
  @OneToMany(() => Product, (product) => product.category) products: Product[];
}
