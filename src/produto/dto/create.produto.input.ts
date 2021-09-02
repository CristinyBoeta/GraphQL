import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

  
  @InputType()
  export class CreateProdutoInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    nomeProduto: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    descricaoProduto: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    precoProduto: string;
  
    @IsNumber()
    @IsNotEmpty({ message: 'Invalid number'})
    qtdEstoque: number;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    dataCadastroProduto: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    imagem: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Invalid number'})
    categoriaId: number;


  }