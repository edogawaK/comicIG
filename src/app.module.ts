import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigDefault } from './config/database.config';
import { SeederModule } from './database/seeder/seeder.module';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { ComicsModule } from './modules/comics/comic.module';
import { GenresModule } from './modules/genres/genres.module';
import { UsersModule } from './modules/users/users.module';
import { MockModule } from './mock/mock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfigDefault as any),
    SeederModule,
    UsersModule,
    ComicsModule,
    GenresModule,
    MockModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
