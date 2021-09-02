
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from 'typeorm';

@ObjectType()
@Index("cliente_pkey", ["clienteId"], { unique: true })
@Index("cliente_cpf_key", ["cpf"], { unique: true })
@Entity("cliente", { schema: "public" })
export class Cliente {
    @PrimaryGeneratedColumn({ type: "integer", name: "cliente_id" })
    @Field(() => ID)
    clienteId: number;
  
    @Column("character varying", { name: "email", nullable: true, length: 50 })
    email: string;
  
    @Column("character varying", { name: "username", nullable: true, length: 15 })
    username: string;

    @Column("character varying", { name: "senha", nullable: true, length: 20 })
    senha: string;
  
    @Column("character varying", { name: "nome", nullable: true, length: 200 })
    nome: string;
  
    @Column("character varying", { name: "cpf", unique: true, length: 11 })
    cpf: string;
  
    @Column("character varying", { name: "telefone", nullable: true, length: 11 })
    telefone: string;
  
    @Column("date", { name: "data_nascimento", nullable: true })
    dataNascimento: string;
  
    @Column("integer", { name: "endereco_id" })
    enderecoId: number;

    // @OneToMany(() => Pedido, (pedido) => pedido.cliente)
    // pedidos: Pedido[]; 
  }