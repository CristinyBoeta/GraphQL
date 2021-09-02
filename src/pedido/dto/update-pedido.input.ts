import { InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdatePedidoInput{ 
    @IsOptional()
    @IsNumber()
    @IsNotEmpty({message: 'Invalid'})
    numeroPedido?: number;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'Invalid'})
    valorTotalPedido?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'Invalid'})
    dataPedido?: string;
  
    @IsOptional()
    @IsBoolean()
    @IsNotEmpty({message: 'Invalid'})
    status?: boolean;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty({ message: 'Invalid number'})
    clienteId?: number;
}