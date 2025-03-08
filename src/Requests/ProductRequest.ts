import { IsInt, IsNotEmpty, IsString, IsNumber, IsDecimal, IsOptional, Min, Max } from "class-validator";

export class AddProduct  {
    @IsInt()
    @IsNotEmpty()
    category_id: number

    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsNumber()
    @IsNotEmpty()
    @Min(0.0)
    price: number
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    quantity: number

    @IsOptional()
    @IsNumber()
    @Max(10.0)
    @Min(0.0)
    rate: number

    @IsOptional()
    @IsString()
    image: string
}


export class UpadateProduct  {
    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    cat_id: number
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @Min(0.0)
    price: number
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    @Min(0.0)
    quantity: number
    
    @IsOptional()
    @IsNumber()
    @Max(5.0)
    @Min(0.0)
    rate: number
    
    @IsOptional()
    @IsString()
    image: string
}