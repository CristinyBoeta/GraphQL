import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnderecoInput } from './dto/create-endereco.input';
import { UpdateEnderecoInput } from './dto/update-endereco.input';
import { Endereco } from './endereco.entity';

@Injectable()
export class EnderecoService {
    constructor(
        @InjectRepository(Endereco)
        private enderecoRepository: Repository<Endereco>,
    ){}

    async findAllEndereco(): Promise<Endereco[]> {
        return await this.enderecoRepository.find();
    }

    async getEnderecoById(id: string): Promise<Endereco> {
        const user = await this.enderecoRepository.findOne(id);
        if (!user) {
          throw new NotFoundException('User not found');
        }
        return user;
      }

    async createUser(data: CreateEnderecoInput): Promise<Endereco> {
        const user = this.enderecoRepository.create(data);
        return this.enderecoRepository.save(user);
    }

    async updateEndereco(id: string, data: UpdateEnderecoInput): Promise<Endereco> {
        const endereco = await this.getEnderecoById(id);
        return this.enderecoRepository.save({ ...endereco, ...data });
      }

    async deleteEndereco(id: string): Promise<void> {
        const endereco = await this.getEnderecoById(id);
        const enderecoDeleted = await this.enderecoRepository.delete(endereco);
        if (!enderecoDeleted) {
          throw new InternalServerErrorException();
        }
      }
}
