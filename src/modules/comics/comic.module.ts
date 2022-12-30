import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterController } from './controllers/chapters.controller';
import { ComicController } from './controllers/comic.controller';
import { Chapter } from './entities/chapter.entity';
import { Comic } from './entities/comic.entity';
import { ComicGenres } from './entities/comicGenres.entity';
import { Source } from './entities/source.entity';
import { ChapterService } from './services/chapter.service';
import { ComicService } from './services/comic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comic, Chapter, Source, ComicGenres])],
  controllers: [ComicController, ChapterController],
  providers: [ComicService, ChapterService],
})
export class ComicsModule {}
