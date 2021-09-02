import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { Produto } from './produto.entity';
import { ProdutoResolver } from './produto.resolver';
import { ProdutoService } from './produto.service';

@Module({
  imports: [forwardRef(() => CategoriaModule),  
    TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService, ProdutoResolver],
  exports: [ProdutoService]
})
export class ProdutoModule {}
