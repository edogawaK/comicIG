import { Controller, Get, Param } from '@nestjs/common';
import { ChapterService } from '../services/chapter.service';

@Controller('chapters')
export class ChapterController {
  constructor(private chapterService: ChapterService) {}

  @Get('/:chapterId')
  async getChapter(@Param() params) {
    const { chapterId } = params;
    const chapter = await this.chapterService.getById(chapterId);
    return chapter.response();
  }
}
