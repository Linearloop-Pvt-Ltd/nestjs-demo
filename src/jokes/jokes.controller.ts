import { Controller, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get()
  async getJoke() {
    return this.jokesService.getJoke();
  }
}
