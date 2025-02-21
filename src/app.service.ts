import { Injectable } from '@nestjs/common';
import { CounterService } from './counters/counters.service';

@Injectable()
export class AppService {
  constructor(private readonly counterService: CounterService) {}

  getHello() {
    return this.counterService.getCounter();
  }
}
