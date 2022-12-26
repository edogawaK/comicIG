import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comic } from './comic.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  views: number;

  @Column()
  date: string;

  @Column()
  avt: string;

  @Column()
  status: number;

  @Column({ name: 'comic_id' })
  comicId: number;

  @ManyToOne((type) => Comic)
  @JoinColumn({ name: 'comic_id', referencedColumnName: 'id' })
  comics: Comic[];
}
