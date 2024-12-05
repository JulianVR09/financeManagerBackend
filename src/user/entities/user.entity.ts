import { Budget } from 'src/budget/entities/budget.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ select: false })
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Budget, (budget) => budget.user)
  budgets: Budget[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  @OneToMany(() => Category, (category) => category.user)
  category: Category[];
}