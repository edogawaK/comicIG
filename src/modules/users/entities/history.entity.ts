import { Chapter } from 'src/modules/comics/entities/chapter.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import User from './user.entity';

@Entity()
class History {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'chapter_id' })
  chapterId: number;

  @ManyToOne((type) => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne((type) => Chapter)
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;
}

export default History;
