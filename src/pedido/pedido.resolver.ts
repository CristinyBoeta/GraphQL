import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';

@Resolver()
export class PedidoResolver {
    constructor(
        private readonly pedidoService: PedidoService
    ){}

  @Query(() => [Pedido])
  async pedidos(): Promise<Pedido[]> {
    return await this.pedidoService.findAllPedido();
  }

  @Query(() => Pedido)
  async pedido(@Args('id') id: string): Promise<Pedido> {
    return this.pedidoService.getPedidoById(id);
  }

  @Mutation(() => Pedido)
  async createPedido(@Args('data') data: CreatePedidoInput): Promise<Pedido> {
    return this.pedidoService.createPedido(data);
  }

  @Mutation(() => Pedido)
  async updatePedido(
    @Args('id') id: string,
    @Args('data') data: UpdatePedidoInput,
  ): Promise<Pedido> {
    return this.pedidoService.updatePedido(id, data );
  }

  @Mutation(() => Boolean)
  async deletePedido(@Args('id') id: string): Promise<true> {
    await this.pedidoService.deletePedido(id);
    return true;
  }
}
