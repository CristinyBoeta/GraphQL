import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Cliente } from "../Cliente/cliente.entity";
  
  @ObjectType()
  @Index("pedido_pkey",["pedidoId"], { unique: true })
  @Entity("pedido", { schema: "public" })
  export class Pedido {

    @PrimaryGeneratedColumn({ type: "integer", name: "pedido_id" })
    @Field(() => ID)
    pedidoId: number;
  
 
    @Column("integer", { name: "numero_pedido", nullable: true })
    numeroPedido: number;
  

    @Column("numeric", { name: "valor_total_pedido", nullable: true })
    valorTotalPedido: string;
  

    @Column("date", { name: "data_pedido", default: () => "now()" })
    dataPedido: string;
  

    @Column("boolean", { name: "status", nullable: true })
    status: boolean;

    @Column("integer", {name: "cliente_id", nullable: true})
    clienteId: number;

    // @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
    // @JoinColumn([{ name: "cliente_id", referencedColumnName: "clienteId" }])
    // cliente: Cliente;
 
    // @OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.pedido)
    // produtoPedidos: ProdutoPedido[];
 
  }