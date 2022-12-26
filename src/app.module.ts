import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB } from './app.controller';
import DatabaseConfigModule from './config/database.config';
import { Genres } from './modules/genres/entities/genres.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    DatabaseConfigModule,
    UsersModule,
    TypeOrmModule.forFeature([Genres]),
  ],
  controllers: [DB],
  providers: [],
})
export class AppModule {}
