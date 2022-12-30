import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { ComicHistory } from './history.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  role: number;

  @Column({ default: 1 })
  status: number;

  @DeleteDateColumn()
  deleted: Date;

  @OneToMany((type) => ComicHistory, (history) => history.user)
  histories: ComicHistory[];
}
