import { Genres } from 'src/modules/genres/entities/genres.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Comic } from './comic.entity';

@Entity()
export class ComicGenres {
  @PrimaryColumn({ name: 'comic_id' })
  comicId: string;

  @PrimaryColumn({ name: 'genres_id' })
  genresId: string;

  @ManyToOne(() => Genres)
  @JoinColumn({ name: 'genres_id', referencedColumnName: 'id' })
  genres: Genres;

  @ManyToOne(() => Comic)
  @JoinColumn({ name: 'comic_id', referencedColumnName: 'id' })
  comic: Comic;
}
