import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesService.create(createCategoryDto);
    return await this.categoriesService.save(category);
  }

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', IdValidationPipe)
    id: string,
  ) {
    const category = await this.categoriesService.findOne(parseInt(id));
    if (!category) throw new NotFoundException('category not found');
    return category;
  }

  @Patch(':id')
  async update(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const category = await this.categoriesService.findOne(+id);
    Object.assign(category, updateCategoryDto);
    return await this.categoriesService.save(category);
  }

  @Delete(':id')
  async remove(@Param('id', IdValidationPipe) id: string) {
    const category = await this.categoriesService.findOne(+id);
    return await this.categoriesService.remove(category);
  }
}
