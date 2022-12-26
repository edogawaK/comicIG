import { Controller, Get, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { Comic } from './modules/comics/entities/comic.entity';
import { Genres } from './modules/genres/entities/genres.entity';

@Controller('db')
export class DB {
  constructor(
    @InjectRepository(Genres) private genresRepository,
    @InjectRepository(Comic) private comicRepostitory,
  ) {}

  @Get('/seed')
  async seed() {
    const rawData = readFileSync('src/database/seed/comics.json').toString();
    const jsonData = JSON.parse(rawData);

    const genres = {};
    for (let i = 0; i < jsonData.length; i++) {
      for (let j = 0; j < jsonData[i].genres.length; j++) {
        genres[jsonData[i].genres[j].title] = true;
      }
    }

    for (const key in genres) {
      const i = this.genresRepository.create({ title: key });
      const j = await this.genresRepository.save(i);
      genres[key] = j.id;
    }
  }
}
