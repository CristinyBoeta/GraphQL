import { Test, TestingModule } from '@nestjs/testing';
import { EnderecoResolver } from './endereco.resolver';

describe('EnderecoResolver', () => {
  let resolver: EnderecoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnderecoResolver],
    }).compile();

    resolver = module.get<EnderecoResolver>(EnderecoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
