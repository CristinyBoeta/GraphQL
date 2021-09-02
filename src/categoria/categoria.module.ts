import { forwardRef, Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaResolver } from './categoria.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';
import { ProdutoModule } from 'src/produto/produto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]),
  forwardRef(() => ProdutoModule)],
  providers: [CategoriaService, CategoriaResolver],
  exports: [CategoriaService]
})
export class CategoriaModule {}
