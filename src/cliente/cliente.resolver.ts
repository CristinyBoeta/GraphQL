import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Resolver()
export class ClienteResolver {
    constructor(
        private readonly clienteService: ClienteService
    ){}

    @Query(() => [Cliente])
    async clientes(): Promise<Cliente[]> {
      return await this.clienteService.findAllCliente();
    }

    @Query(() => Cliente)
    async cliente(@Args('id') id: string): Promise<Cliente> {
        return this.clienteService.getClienteById(id);
  }

    @Mutation(() => Cliente)
    async createCliente(@Args('data') data: CreateClienteInput): Promise<Cliente> {
        return this.clienteService.createCliente(data);
    }

    @Mutation(() => Cliente)
    async updateCliente(
        @Args('id') id: string,
        @Args('data') data: UpdateClienteInput,
    ): Promise<Cliente> {
        return this.clienteService.updateCliente(id, data );
    }

    @Mutation(() => Boolean)
    async deleteCliente(@Args('id') id: string): Promise<true> {
        await this.clienteService.deleteCliente(id);
        return true;
    }
}
