import { InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreatePedidoInput{ 
    @IsNumber()
    @IsNotEmpty({message: 'Invalid'})
    numeroPedido: number;
  
    @IsString()
    @IsNotEmpty({message: 'Invalid'})
    valorTotalPedido: string;
  
    @IsString()
    @IsNotEmpty({message: 'Invalid'})
    dataPedido: string;
  
    @IsBoolean()
    @IsNotEmpty({message: 'Invalid'})
    status: boolean;

    @IsNumber()
    @IsNotEmpty({ message: 'Invalid number'})
    clienteId: number;
}