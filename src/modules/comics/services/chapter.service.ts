import { HttpException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Chapter } from '../entities/chapter.entity';

export class ChapterService {
  private chapterRepository: Repository<Chapter>;

  constructor(@InjectEntityManager() private entityManager: EntityManager) {
    this.chapterRepository = entityManager.getRepository(Chapter);
  }

  async getAll(): Promise<Chapter[]> {
    return await this.chapterRepository.find();
  }

  async getById(id: string): Promise<Chapter> {
    const chapter = await this.chapterRepository.findOne({
      where: { id },
      relations: { sources: true },
    });
    if (!chapter) {
      throw new HttpException('Chapter Not Found!', 404);
    }
    return chapter;
  }

  async getIntroForComic(comicId: string): Promise<Chapter[]> {
    const chapters = await this.chapterRepository.findBy({ comicId });
    return chapters;
  }

  async getChapterById(id: string): Promise<any> {
    const chapters = await this.chapterRepository.findBy({ id });
    return chapters;
  }
}
