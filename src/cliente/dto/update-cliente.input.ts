import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateClienteInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    email?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    username?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    senha?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    nome?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    cpf?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    telefone?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    dataNascimento?: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty({ message: 'Invalid characters' })
    enderecoId?: number;

    // @OneToMany(() => Pedido, (pedido) => pedido.cliente)
    // pedidos: Pedido[]; 
  }