import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateClienteInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    email: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    username: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    senha: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    nome: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    cpf: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    telefone: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    dataNascimento: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Invalid characters' })
    enderecoId: number;

    // @OneToMany(() => Pedido, (pedido) => pedido.cliente)
    // pedidos: Pedido[]; 
  }