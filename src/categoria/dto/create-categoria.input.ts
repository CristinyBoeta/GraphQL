import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateCategoriaInput{
    @IsString()
    @IsNotEmpty({ message: 'Inválido insira uma string'})
    nomeCategoria: string;

    @IsString()
    @IsNotEmpty({ message: 'Inválido insira uma string'})
    descricaoCategoria: string;
}