import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';
import * as FS from 'fs';
import { Genres } from '../../modules/genres/entities/genres.entity';

export class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const rawData = FS.readFileSync('src/database/seeder/data/comics.json');
    const comics = JSON.parse(rawData.toString());
    const genres = {};

    comics.forEach((comic) => {
      comic.genres.forEach(
        (genresItem) => (genres[genresItem.id] = genresItem.title),
      );
    });

    const entityManager = connection.manager;
    for (const genresId in genres) {
      await entityManager.save(
        entityManager.create(Genres, {
          id: genresId,
          title: genres[genresId],
        }),
      );
    }
  }
}
