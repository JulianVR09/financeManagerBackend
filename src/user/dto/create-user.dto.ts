import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsString()
    @MinLength(8)
    password: string;
  
    @IsString()
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    name: string;
  }