import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaResolver } from './categoria.resolver';

describe('CategoriaResolver', () => {
  let resolver: CategoriaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaResolver],
    }).compile();

    resolver = module.get<CategoriaResolver>(CategoriaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
