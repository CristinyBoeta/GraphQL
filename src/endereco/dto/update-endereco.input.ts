import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateEnderecoInput{  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    cep?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    rua?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    bairro?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    cidade?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    numero?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    complemento?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    uf?: string;
}