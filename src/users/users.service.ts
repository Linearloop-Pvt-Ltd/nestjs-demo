import { Injectable } from '@nestjs/common';
import { Counter } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(
    @InjectMetric('users_requests_total')
    private readonly usersMetric: Counter<string>,
  ) {}

  async getUsers() {
    this.usersMetric.inc();
    const response = await axios.get('https://randomuser.me/api/?results=6');
    return response.data.results;
  }
}
