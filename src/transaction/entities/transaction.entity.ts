import { Budget } from "src/budget/entities/budget.entity";
import { Category } from "src/categories/entities/category.entity";
import { Type } from "src/common/enums/type.enum";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @Column()
    description?: string;

    @Column({ type: 'enum', enum: Type })
    type: Type;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.transactions)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Category, (category) => category.transactions)
    @JoinColumn({ name: 'categoryId' })
    category: Category
    
    @ManyToOne(() => Budget, (budget) => budget.transactions)
    @JoinColumn({ name: 'budgetId' })
    budget: Budget;
}
