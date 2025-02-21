import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { UsersModule } from './users/users.module';
import { CountersModule } from './counters/counters.module';
import { CounterService } from './counters/counters.service';

@Module({
  imports: [JokesModule, UsersModule, CountersModule],
  controllers: [AppController],
  providers: [AppService, CounterService],
})
export class AppModule {}
