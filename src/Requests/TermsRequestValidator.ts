import { IsNotEmpty, IsString } from "class-validator"

export class Terms{

  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  description: string;

}