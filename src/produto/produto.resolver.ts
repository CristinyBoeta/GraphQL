import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { CreateProdutoInput } from './dto/create.produto.input';
import { UpdateProdutoInput } from './dto/update.produto.input';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@Resolver()
export class ProdutoResolver {
    constructor(
        private readonly produtoService: ProdutoService
    ){}

  @Query(() => [Produto])
  async produtos(): Promise<Produto[]> {
    return await this.produtoService.findAllProduto();
  }

  @Query(() => Produto)
  async produto(@Args('id') id: string): Promise<Produto> {
    return this.produtoService.getProdutoById(id);
  }

  @Mutation(() => Produto)
  async createProduto(@Args('data') data: CreateProdutoInput): Promise<Produto> {
    return this.produtoService.createProduto(data);
  }

  @Mutation(() => Produto)
  async updateProduto(
    @Args('id') id: string,
    @Args('data') data: UpdateProdutoInput,
  ): Promise<Produto> {
    return this.produtoService.updateProduto(id, data );
  }

  @Mutation(() => Boolean)
  async deleteProduto(@Args('id') id: string): Promise<true> {
    await this.produtoService.deleteProduto(id);
    return true;
  }

}
