import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private pedidoRepository: Repository<Pedido>,
    ){}

    async findAllPedido(): Promise<Pedido[]> {
        return await this.pedidoRepository.find();
      }

    async getPedidoById(id: string): Promise<Pedido> {
        const pedido = await this.pedidoRepository.findOne(id);
        if (!pedido) {
          throw new NotFoundException('User not found');
        }
        return pedido;
      }

    async createPedido(data: CreatePedidoInput): Promise<Pedido> {
        const pedido = this.pedidoRepository.create(data);
        return this.pedidoRepository.save(pedido);
      }

    async updatePedido(id: string, data: UpdatePedidoInput): Promise<Pedido> {
        const pedido = await this.getPedidoById(id);
        return this.pedidoRepository.save({ ...pedido, ...data });
      }
    
    async deletePedido(id: string): Promise<void> {
        const pedido = await this.getPedidoById(id);
        const pedidoDeleted = await this.pedidoRepository.delete(pedido);
        if (!pedidoDeleted) {
          throw new InternalServerErrorException();
        }
      }
}
