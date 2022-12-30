import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ComicInterceptor } from '../interceptors/comic.interceptor';
import { ComicService } from '../services/comic.service';

@Controller('comics')
export class ComicController {
  constructor(private comicService: ComicService) {}

  @Get('/')
  async findAll() {
    const comics = await this.comicService.getAll();
    return comics.map((comic) =>
      comic.response({ context: { route: this.findAll.name } }),
    );
  }

  @Get('/:id')
  @UseInterceptors(ComicInterceptor)
  async findOne(@Param() params) {
    const { id } = params;
    const { comic, chapters } = await this.comicService.getById(id);
    return {
      ...comic.response(),
      chapters: chapters.map((chapter) => chapter.response()),
    };
  }
}
