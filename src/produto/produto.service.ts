import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoInput } from './dto/create.produto.input';
import { UpdateProdutoInput } from './dto/update.produto.input';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
    ){}

    async findAllProduto(): Promise<Produto[]> {
        return await this.produtoRepository.find();
      }

    async getProdutoById(id: string): Promise<Produto> {
        const produto = await this.produtoRepository.findOne(id);
        if (!produto) {
          throw new NotFoundException('User not found');
        }
        return produto;
      }

    async createProduto(data: CreateProdutoInput): Promise<Produto> {
        const produto = this.produtoRepository.create(data);
        return this.produtoRepository.save(produto);
      }

    async updateProduto(id: string, data: UpdateProdutoInput): Promise<Produto> {
        const produto = await this.getProdutoById(id);
        return this.produtoRepository.save({ ...produto, ...data });
      }
    
    async deleteProduto(id: string): Promise<void> {
        const produto = await this.getProdutoById(id);
        const produtoDeleted = await this.produtoRepository.delete(produto);
        if (!produtoDeleted) {
          throw new InternalServerErrorException();
        }
      }

}
