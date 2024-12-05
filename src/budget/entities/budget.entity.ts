import { Transaction } from "src/transaction/entities/transaction.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Budget {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;

    @Column()
    day: string

    @Column()
    startHour: string;

    @Column()
    endHour: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.budgets)
    @JoinColumn({ name: 'userId' })
    user: User;

    @OneToMany(() => Transaction, (transaction) => transaction.budget)
    transactions: Transaction[];
}
