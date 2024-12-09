import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', length: '64' }) name: string;

  @Column({ type: 'float' }) price: number;

  @Column({ type: 'int' }) stock: number;

  @Column({
    type: 'varchar',
    length: 120,
    nullable: true,
    default: 'default.svg',
  })
  image: string;

  @ManyToOne(() => Category) category: Category;
}
