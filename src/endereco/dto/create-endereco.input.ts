import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateEnderecoInput{  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    cep: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    rua: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    bairro: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    cidade: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    numero: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    complemento: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid is a string'})
    uf: string;
}