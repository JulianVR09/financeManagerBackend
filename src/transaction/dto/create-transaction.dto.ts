import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "src/common/enums/type.enum";

export class CreateTransactionDto {
    @IsNumber()
    amount: number

    @IsDate()
    date: Date

    @IsOptional()
    @IsString()
    description?: string

    @IsEnum(Type, { message: 'Type must be Income or Expense'})
    type: Type;
}
