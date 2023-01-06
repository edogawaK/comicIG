import { Module } from '@nestjs/common';
import { HackerController } from './hacker.controller';

@Module({
  imports: [],
  controllers: [HackerController],
})
export class HackerModule {}
