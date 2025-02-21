import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {
  async getUsers() {
    const response = await axios.get('https://randomuser.me/api/?results=6');
    return response.data.results;
  }
}
