import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JokesService {
  async getJoke() {
    const response = await axios.get(
      'https://official-joke-api.appspot.com/random_joke',
    );
    return response.data;
  }
}
