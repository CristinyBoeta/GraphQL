import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaInput } from './dto/create-categoria.input';
import { UpdateCategoriaInput } from './dto/update-categoria.input';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ){}

    async findAllCategoria(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
      }

    async getCategoriaById(id: string): Promise<Categoria> {
        const user = await this.categoriaRepository.findOne(id);
        if (!user) {
          throw new NotFoundException('User not found');
        }
        return user;
      }

    async createCategoria(data: CreateCategoriaInput): Promise<Categoria> {
        const categoria = this.categoriaRepository.create(data);
        return this.categoriaRepository.save(categoria);
      }

    async updateCategoria(id: string, data: UpdateCategoriaInput): Promise<Categoria> {
        const categoria = await this.getCategoriaById(id);
        return this.categoriaRepository.save({ ...categoria, ...data });
      }
    
    async deleteCategoria(id: string): Promise<void> {
        const categoria = await this.getCategoriaById(id);
        const categoriaDeleted = await this.categoriaRepository.delete(categoria);
        if (!categoriaDeleted) {
          throw new InternalServerErrorException();
        }
      }
}
