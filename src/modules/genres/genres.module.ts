import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genres } from './entities/genres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genres])],
  controllers: [],
  providers: [],
})
export class GenresModule {}
