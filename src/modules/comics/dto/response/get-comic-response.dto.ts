import { Chapter } from '../../entities/chapter.entity';
import { Comic } from '../../entities/comic.entity';

export type ComicResponseDTO = {
  comic: Comic;
  chapters: Chapter[];
};
