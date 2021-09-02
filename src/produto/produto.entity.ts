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
  import { Categoria } from "../Categoria/categoria.entity";
  
  @ObjectType()
  @Index("produto_pkey",["produtoId"], { unique: true })
  @Entity("produto", { schema: "public" })
  export class Produto {
    @PrimaryGeneratedColumn({ type: "integer", name: "produto_id" })
    @Field(() => ID)
    produtoId: number;
  
    @Column("character varying", {
      name: "nome_produto",
      nullable: true,
      length: 50,
    })
    nomeProduto: string;
  
    @Column("character varying", {
      name: "descricao_produto",
      nullable: true,
      length: 200,
    })
    descricaoProduto: string;
  
    @Column("numeric", { name: "preco_produto", nullable: true })
    precoProduto: string;
  
    @Column("integer", { name: "qtd_estoque", nullable: true })
    qtdEstoque: number;
  
    @Column("date", {
      name: "data_cadastro_produto",
      nullable: true,
      default: () => "now()",
    })
    dataCadastroProduto: string;
  
    @Column("character varying", { name: "imagem", nullable: true })
    imagem: string;

    @Field(type => Categoria)
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    @JoinColumn([{ name: "categoria_id", referencedColumnName: "categoriaId" }])
    categoria: Categoria;
  
  
    //  @OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.produto)
    // @OneToMany(type => ProdutoPedido, produtoPedido => produtoPedido.produto)
    // produtoPedidos: ProdutoPedido[];
  }