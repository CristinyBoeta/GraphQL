import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoResolver } from './pedido.resolver';
import { PedidoService } from './pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  providers: [PedidoService, PedidoResolver],
})
export class PedidoModule {}
