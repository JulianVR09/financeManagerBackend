import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { ActiveUserInterface } from 'src/common/interfaces/activeUser.interface';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}
  async createCategory(createCategoryDto: CreateCategoryDto, user: ActiveUserInterface): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto)
    return this.categoryRepository.save(category)
  }

  async findAllCategory(user: ActiveUserInterface): Promise<Category[]> {
    return this.categoryRepository.find({ where: { user: { id: user.id }}})
  }

  findOne(id: string) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
