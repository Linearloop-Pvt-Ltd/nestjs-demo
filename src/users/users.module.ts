import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    makeCounterProvider({
      name: 'users_requests_total',
      help: 'Total number of users requests',
    }),
  ],
})
export class UsersModule {}
