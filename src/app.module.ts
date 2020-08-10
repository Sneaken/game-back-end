import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GobangModule } from './gobang/gobang.module';

@Module({
  imports: [GobangModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
