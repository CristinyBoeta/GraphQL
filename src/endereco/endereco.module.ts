import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoResolver } from './endereco.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from './endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco])],
  providers: [EnderecoService, EnderecoResolver]
})
export class EnderecoModule {}
