import {  UserRole } from "../entity/User";//+
import { IsEmpty , IsEmail  , IsInt, IsOptional, IsEnum } from "class-validator"



export class User{
  @IsEmpty()
  @IsEmail()
  email: string;

  @IsEmpty()
  @IsInt()
  password: string;

  @IsEmpty()
  name: string;

  @IsEmpty()
  gender: string;

  @IsEmpty()
  @IsOptional()
  birthdate: Date;

  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;
}