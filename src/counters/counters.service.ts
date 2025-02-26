import { Injectable, HttpStatus } from '@nestjs/common';
import { Counter, Histogram } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class CounterService {
  private count = 0;

  constructor(
    @InjectMetric('counter_operations_total')
    private readonly counterMetric: Counter<string>,
    @InjectMetric('counter_http_requests')
    private readonly apiMetrics: Histogram<string>,
  ) {}

  getCounter() {
    this.counterMetric.inc({ operation: 'get' });
    this.apiMetrics.observe(
      { method: 'GET', status_code: HttpStatus.OK, path: '/counter' },
      Math.random(), // Replace with actual response time
    );
    return { count: this.count };
  }

  updateCounter(increment: number) {
    this.counterMetric.inc({ operation: 'update' });
    this.apiMetrics.observe(
      { method: 'POST', status_code: HttpStatus.OK, path: '/counter' },
      Math.random(), // Replace with actual response time
    );
    this.count += increment;
    return { count: this.count };
  }
}
