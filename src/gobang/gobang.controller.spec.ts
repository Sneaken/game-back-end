import { Test, TestingModule } from '@nestjs/testing';
import { GobangController } from './gobang.controller';

describe('Gobang Controller', () => {
  let controller: GobangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GobangController],
    }).compile();

    controller = module.get<GobangController>(GobangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
