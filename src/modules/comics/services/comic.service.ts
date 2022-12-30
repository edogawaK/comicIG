import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  Inject,
  Req,
} from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Request } from 'express';
import { EntityManager, Repository } from 'typeorm';
import { Chapter } from '../entities/chapter.entity';
import { Comic } from '../entities/comic.entity';
import { ChapterService } from './chapter.service';

export const Decorator = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.body.user;
    return data ? user?.[data] : user;
  },
);

export class ComicService {
  private comicRepository: Repository<Comic>;
  private limit: number;

  constructor(
    private chapterService: ChapterService,
    @InjectEntityManager() private entityManager: EntityManager,
    @Inject('REQUEST') private request: Request,
  ) {
    this.comicRepository = entityManager.getRepository(Comic);
    this.limit = 10;
    if (+request.query.limit) {
      this.limit = +request.query.limit;
    }
  }

  async getAll(): Promise<Comic[]> {
    return await this.comicRepository.find({ take: this.limit });
  }

  async getById(id: string): Promise<{ comic: Comic; chapters: Chapter[] }> {
    const comic = await this.comicRepository.findOneBy({ id });
    if (!comic) {
      throw new HttpException('Comic Not Found!', 404);
    }
    const chapters = await this.chapterService.getIntroForComic(id);
    return { comic, chapters };
  }
}
