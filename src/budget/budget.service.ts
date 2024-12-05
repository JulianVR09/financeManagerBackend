import { Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { Between, Repository } from 'typeorm';
import { ActiveUserInterface } from 'src/common/interfaces/activeUser.interface';
import { DateTime } from 'luxon';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

  private async obtainAssignments(day: string, startHourTime: DateTime, endHourTime: DateTime): Promise<Budget[]> {
    return await this.budgetRepository.find({
      where: {
        day,
        startHour: Between(startHourTime.toISO(), endHourTime.toISO()),
      },
    });
  }

  async createBudget(createBudgetDto: CreateBudgetDto, user: ActiveUserInterface): Promise<Budget> {
    const { day, startHour } = createBudgetDto

    const startHourTime = DateTime.fromISO(`${day}T${startHour}`)
    const endHourTime = startHourTime.plus({ days: 29 });
    
    const newBudget = {...createBudgetDto, startHour: startHourTime.toISO(), endHour: endHourTime.toISO(), user: { id: user.id }}
    return await this.budgetRepository.save(newBudget);
  }
}
