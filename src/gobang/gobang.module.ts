import { Module } from '@nestjs/common';
import { GobangController } from './gobang.controller';
import { GobangGateway } from './gobang.gateway';

@Module({
  controllers: [GobangController],
  providers:[GobangGateway]
})
export class GobangModule {}
