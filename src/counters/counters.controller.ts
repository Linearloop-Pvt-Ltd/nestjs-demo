import { Controller, Get, Post, Body } from '@nestjs/common';
import { CounterService } from './counters.service';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  getCounter() {
    return this.counterService.getCounter();
  }

  @Post()
  updateCounter(@Body('increment') increment: number) {
    return this.counterService.updateCounter(increment);
  }
}
