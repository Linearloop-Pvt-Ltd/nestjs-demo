import { Injectable, HttpStatus } from '@nestjs/common';
import { Counter, Histogram } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import axios from 'axios';

@Injectable()
export class JokesService {
  constructor(
    @InjectMetric('jokes_requests_total')
    private readonly jokesMetric: Counter<string>,
    @InjectMetric('jokes_http_requests')
    private readonly apiMetrics: Histogram<string>,
  ) {}

  async getJoke() {
    const startTime = Date.now();
    try {
      this.jokesMetric.inc();
      const response = await axios.get(
        'https://official-joke-api.appspot.com/random_joke',
      );
      
      const duration = (Date.now() - startTime) / 1000; // Convert to seconds
      this.apiMetrics.observe(
        { method: 'GET', status_code: response.status, path: '/jokes' },
        duration,
      );
      
      return response.data;
    } catch (error) {
      const duration = (Date.now() - startTime) / 1000;
      this.apiMetrics.observe(
        { 
          method: 'GET', 
          status_code: error.response?.status || 500, 
          path: '/jokes' 
        },
        duration,
      );
      throw error;
    }
  }
}
