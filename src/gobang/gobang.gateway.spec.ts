import { Test, TestingModule } from '@nestjs/testing';
import { GobangGateway } from './gobang.gateway';

describe('GobangGateway', () => {
  let gateway: GobangGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GobangGateway],
    }).compile();

    gateway = module.get<GobangGateway>(GobangGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
