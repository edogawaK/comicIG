import { ResponseParams } from 'src/types/response-params.type';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Comic } from './comic.entity';
import { Source } from './source.entity';

@Entity()
export class Chapter {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  views: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column()
  avt: string;

  @Column({ default: 1 })
  status: number;

  @Column({ name: 'comic_id' })
  comicId: string;

  @ManyToOne((type) => Comic)
  @JoinColumn({ name: 'comic_id', referencedColumnName: 'id' })
  comics: Comic[];

  @OneToMany(() => Source, (source) => source.chapter)
  sources: Source[];

  response(options?: ResponseParams) {
    return {
      id: this.id,
      title: this.title,
      views: this.views,
      sources: this.sources.map((source) => source.response()),
    };
  }
}
