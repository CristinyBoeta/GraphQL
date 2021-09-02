import { Test, TestingModule } from '@nestjs/testing';
import { PedidoResolver } from './pedido.resolver';

describe('PedidoResolver', () => {
  let resolver: PedidoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoResolver],
    }).compile();

    resolver = module.get<PedidoResolver>(PedidoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
