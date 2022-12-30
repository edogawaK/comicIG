import { ResponseParams } from 'src/types/response-params.type';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Chapter } from './chapter.entity';
@Entity()
export class Source {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column({ name: 'chapter_id' })
  chapterId: string;

  @ManyToOne((type) => Chapter)
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;

  response(options?: ResponseParams) {
    return {
      url: this.url,
    };
  }
}
