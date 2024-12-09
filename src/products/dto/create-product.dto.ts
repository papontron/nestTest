import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  name: string;
  price: number;
  stock: number;
  category: Category;
}
