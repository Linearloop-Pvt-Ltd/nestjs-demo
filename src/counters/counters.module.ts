import { Module } from '@nestjs/common';
import { CounterController } from './counters.controller';
import { CounterService } from './counters.service';

@Module({
  controllers: [CounterController],
  providers: [CounterService],
})
export class CountersModule {}
