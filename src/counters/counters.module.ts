import { Module } from '@nestjs/common';
import { CounterController } from './counters.controller';
import { CounterService } from './counters.service';
import { makeCounterProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';

const counterProvider = makeCounterProvider({
  name: 'counter_operations_total',
  help: 'Total number of counter operations',
  labelNames: ['operation'],
});

const apiMetricsProvider = makeHistogramProvider({
  name: 'counter_http_requests',
  help: 'Counter API HTTP requests',
  labelNames: ['method', 'status_code', 'path'],
  buckets: [0.1, 0.5, 1, 2, 5],
});

@Module({
  controllers: [CounterController],
  providers: [CounterService, counterProvider, apiMetricsProvider],
  exports: [CounterService, counterProvider, apiMetricsProvider],
})
export class CountersModule {}
