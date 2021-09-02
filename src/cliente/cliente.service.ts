import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
    ){}

    async findAllCliente(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
      }

    async getClienteById(id: string): Promise<Cliente> {
        const cliente = await this.clienteRepository.findOne(id);
        if (!cliente) {
          throw new NotFoundException('cliente not found');
        }
        return cliente;
      }

    async createCliente(data: CreateClienteInput): Promise<Cliente> {
        const cliente = this.clienteRepository.create(data);
        return this.clienteRepository.save(cliente);
      }

    async updateCliente(id: string, data: UpdateClienteInput): Promise<Cliente> {
        const cliente = await this.getClienteById(id);
        return this.clienteRepository.save({ ...cliente, ...data });
      }
    
    async deleteCliente(id: string): Promise<void> {
        const cliente = await this.getClienteById(id);
        const clienteDeleted = await this.clienteRepository.delete(cliente);
        if (!clienteDeleted) {
          throw new InternalServerErrorException();
        }
      }
}
