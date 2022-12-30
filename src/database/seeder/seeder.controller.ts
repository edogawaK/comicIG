import { Controller, Get } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { IsUUID } from 'class-validator';
import * as FS from 'fs';
import { generate } from 'rxjs';
import { generateID } from 'src/helpers/generateId';
import { Chapter } from 'src/modules/comics/entities/chapter.entity';
import { Comic } from 'src/modules/comics/entities/comic.entity';
import { Source } from 'src/modules/comics/entities/source.entity';
import { Genres } from 'src/modules/genres/entities/genres.entity';

@Controller('/seeder')
export class SeederController {
  constructor(@InjectEntityManager() private entityManager) {}

  @Get('/')
  async seedGenres() {
    let rawData = FS.readFileSync('src/database/seeder/data/comics.json');
    const comics = JSON.parse(rawData.toString());
    rawData = FS.readFileSync('src/database/seeder/data/chapters.json');
    const chapters = JSON.parse(rawData.toString());
    rawData = FS.readFileSync('src/database/seeder/data/source.json');
    const sources = JSON.parse(rawData.toString());
    const genres = {};

    comics.forEach((comic) => {
      comic.genres.forEach(
        (genresItem) => (genres[genresItem.id] = genresItem.title),
      );
    });

    for (const genresId in genres) {
      await this.entityManager.save(
        this.entityManager.create(Genres, {
          id: genresId,
          title: genres[genresId],
        }),
      );
    }

    for (const comic of comics) {
      await this.entityManager.save(
        await this.entityManager.create(Comic, {
          id: comic.id,
          title: comic.title,
          description: comic.description,
          introduction: comic.introduction,
          avt: comic.avt,
          views: comic.views,
          likes: comic.likes,
          author: comic.author,
        }),
      );
    }

    for (const chapter of chapters) {
      await this.entityManager.save(
        await this.entityManager.create(Chapter, {
          id: chapter.id,
          title: chapter.name,
          avt: '',
          views: chapter.view,
          comicId: chapter.comicId,
        }),
      );
    }

    for (const source of sources) {
      await this.entityManager.save(
        await this.entityManager.create(Source, {
          id: generateID(),
          url: source.url,
          chapterId: source.chapterId,
        }),
      );
    }
  }
}
