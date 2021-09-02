import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEnderecoInput } from './dto/create-endereco.input';
import { UpdateEnderecoInput } from './dto/update-endereco.input';
import { Endereco } from './endereco.entity';
import { EnderecoService } from './endereco.service';

@Resolver()
export class EnderecoResolver {
    constructor(
        private readonly enderecoService: EnderecoService
    ){}

  @Query(() => [Endereco])
  async enderecos(): Promise<Endereco[]> {
    return await this.enderecoService.findAllEndereco();
  }

  @Query(() => Endereco)
  async endereco(@Args('id') id: string): Promise<Endereco> {
    return this.enderecoService.getEnderecoById(id);
  }

  @Mutation(() => Endereco)
  async createEndereco(@Args('data') data: CreateEnderecoInput): Promise<Endereco> {
    return this.enderecoService.createUser(data);
  }

  @Mutation(() => Endereco)
  async updateEndereco(
    @Args('id') id: string,
    @Args('data') data: UpdateEnderecoInput,
  ): Promise<Endereco> {
    return this.enderecoService.updateEndereco(id, data );
  }

  @Mutation(() => Boolean)
  async deleteEndereco(@Args('id') id: string): Promise<true> {
    await this.enderecoService.deleteEndereco(id);
    return true;
  }
}
