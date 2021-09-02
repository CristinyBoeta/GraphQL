import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoriaModule } from './categoria/categoria.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CategoriaModule,
    EnderecoModule,
    ProdutoModule,
    ClienteModule,
    PedidoModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

