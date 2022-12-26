import User from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'text' })
  introduction: string;

  @Column()
  avt: string;

  @Column()
  views: number;

  @Column()
  likes: number;

  @Column()
  date: string;

  @Column({ default: 1 })
  status: number;

  @Column()
  author: string;
}
