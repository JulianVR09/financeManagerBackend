import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from 'src/common/enums/type.enum';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>) {}
  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(createTransactionDto)
    return await this.transactionRepository.save(transaction)
  }

  async findAllCategoryByType(type: Type): Promise<Transaction[]>  {
    return await this.transactionRepository.find({where: { type }})
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
