import { Role } from 'src/enum/role.enum';
import { ResponseParams } from 'src/types/response-params.type';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ComicController } from '../controllers/comic.controller';

@Entity()
export class Comic {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  introduction: string;

  @Column()
  avt: string;

  @Column()
  views: number;

  @Column()
  likes: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ default: 1 })
  status: number;

  @Column()
  author: string;

  response(option?: ResponseParams) {
    const { context, role } = option ?? {};

    if (context?.route === ComicController.prototype.findAll.name)
      return { id: this.id, avt: this.avt, title: this.title };

    return {
      id: this.id,
      avt: this.avt,
      date: this.date,
      description: this.description,
      introduction: this.introduction,
      likes: this.likes,
      title: this.title,
      views: this.views,
      author: this.author,
    };
  }
}
