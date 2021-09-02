import { Body, Param } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Categoria } from './categoria.entity';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaInput } from './dto/create-categoria.input';
import { UpdateCategoriaInput } from './dto/update-categoria.input';

@Resolver('Categoria')
export class CategoriaResolver {
    constructor(
        private readonly categoriaService: CategoriaService
    ){}

    @Query(() => [Categoria])
    async categorias(): Promise<Categoria[]> {
      return await this.categoriaService.findAllCategoria();
    }

    @Query(() => Categoria)
    async categoria(@Args('id') id: string): Promise<Categoria> {
        return this.categoriaService.getCategoriaById(id);
  }

    @Mutation(() => Categoria)
    async createCategoria(@Args('data') data: CreateCategoriaInput): Promise<Categoria> {
        return this.categoriaService.createCategoria(data);
    }

    @Mutation(() => Categoria)
    async updateCategoria(
        @Args('id') id: string,
        @Args('data') data: UpdateCategoriaInput,
    ): Promise<Categoria> {
        return this.categoriaService.updateCategoria(id, data );
    }

    @Mutation(() => Boolean)
    async deleteCategoria(@Args('id') id: string): Promise<true> {
        await this.categoriaService.deleteCategoria(id);
        return true;
    }
}
