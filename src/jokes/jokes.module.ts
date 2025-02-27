import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { makeCounterProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';

@Module({
  controllers: [JokesController],
  providers: [
    JokesService,
    makeCounterProvider({
      name: 'jokes_requests_total',
      help: 'Total number of jokes requests',
    }),
    makeHistogramProvider({
      name: 'jokes_http_requests',
      help: 'Jokes API HTTP requests',
      labelNames: ['method', 'status_code', 'path'],
      buckets: [0.1, 0.5, 1, 2, 5],
    }),
  ],
})
export class JokesModule {}
