import { Controller, Post, Body } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { ApiTags } from '@nestjs/swagger';
import { ActiveUserInterface } from 'src/common/interfaces/activeUser.interface';
import { ActiveUser } from 'src/common/decorators/activeUser.decorator';
import { Budget } from './entities/budget.entity';

@ApiTags('Budget')
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto,@ActiveUser() user: ActiveUserInterface): Promise<Budget> {
    return await this.budgetService.createBudget(createBudgetDto, user);
  }  
}
