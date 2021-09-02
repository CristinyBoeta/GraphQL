import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Index("endereco_pkey",["enderecoId"], { unique: true })
@Entity("endereco", { schema: "public" })
export class Endereco {
  @PrimaryGeneratedColumn({ type: "integer", name: "endereco_id" })
  @Field(() => ID)
  enderecoId: number;

  @Column("character varying", { name: "cep", nullable: true, length: 9 })
  cep: string;

  @Column("character varying", { name: "rua", nullable: true, length: 100 })
  rua: string;

  @Column("character varying", { name: "bairro", nullable: true, length: 30 })
  bairro: string;

  @Column("character varying", { name: "cidade", nullable: true, length: 30 })
  cidade: string;

  @Column("character varying", { name: "numero", nullable: true, length: 10 })
  numero: string;

  @Column("character varying", {
    name: "complemento",
    nullable: true,
    length: 100,
  })
  complemento: string;

  @Column("character varying", { name: "uf", nullable: true, length: 2 })
  uf: string;
}