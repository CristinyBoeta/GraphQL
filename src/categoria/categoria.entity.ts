import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Produto } from 'src/produto/produto.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from 'typeorm';

@ObjectType()
@Index("pedido_pkey",["categoriaId"], { unique: true })
@Entity("categoria", { schema: "public" })
export class Categoria {

    @PrimaryGeneratedColumn({ type: "integer", name: "categoria_id" })
    @Field(() => ID)
    categoriaId: number;

    @Column('character varying', {
      name: "nome_categoria",
      nullable: true,
      length: 20,
    })
    nomeCategoria: string;

    @Column("character varying", {
        name: "descricao_categoria",
        nullable: true,
        length: 200,
      })
      descricaoCategoria: string;

      @Field(type => [Produto], { nullable: true })
      @OneToMany(() => Produto, (produto) => produto.categoria)
      produtos: Produto[];

      // @Field(type => [Produto], { nullable: true })
      // @OneToMany(() => Produto, (produto) => produto.categoria)
      // produtos: Produto[];

}