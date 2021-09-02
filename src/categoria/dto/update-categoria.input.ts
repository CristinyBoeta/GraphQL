import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateCategoriaInput{
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Inválido insira uma string'})
    nomeCategoria?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Inválido insira uma string'})
    descricaoCategoria?: string;
}