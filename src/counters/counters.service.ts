import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  private count = 0;

  getCounter() {
    return { count: this.count };
  }

  updateCounter(increment: number) {
    this.count += increment;
    return { count: this.count };
  }
}
