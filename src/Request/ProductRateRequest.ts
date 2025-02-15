import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class AddProductRate {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(5)
  value: number;

  @IsString()
  @IsOptional()
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
export class UpdateProductRate {
  @IsOptional()
  value: number;

  @IsOptional()
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
