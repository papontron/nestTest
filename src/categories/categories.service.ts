import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
//using the single responsability principle:
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
  create(category: CreateCategoryDto) {
    return this.categoryRepo.create(category);
  }
  save(category: Category) {
    return this.categoryRepo.save(category);
  }

  findAll() {
    return this.categoryRepo.find();
  }

  findOne(id: number) {
    return this.categoryRepo.findOneBy({ id });
  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryRepo.update(id, updateCategoryDto);
  // }

  async remove(category: Category) {
    return this.categoryRepo.remove(category);
  }
}
