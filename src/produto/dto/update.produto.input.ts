import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

  
  @InputType()
  export class UpdateProdutoInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    nomeProduto?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    descricaoProduto?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    precoProduto?: string;
  
    @IsOptional()
    @IsNumber()
    @IsNotEmpty({ message: 'Invalid number'})
    qtdEstoque?: number;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    dataCadastroProduto?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    imagem?: string;
  
  }