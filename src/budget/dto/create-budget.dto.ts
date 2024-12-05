import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateBudgetDto {
    @IsNumber()
    amount: number

    @IsString()
    day: string

    @IsString()
    startHour: string

    @IsString()
    endHour: string
}
