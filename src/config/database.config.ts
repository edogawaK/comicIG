import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Chapter } from 'src/modules/comics/entities/chapter.entity';
import { Comic } from 'src/modules/comics/entities/comic.entity';
import { ComicGenres } from 'src/modules/comics/entities/comicGenres.entity';
import { Source } from 'src/modules/comics/entities/source.entity';
import { Genres } from 'src/modules/genres/entities/genres.entity';
import History from 'src/modules/users/entities/history.entity';
import User from 'src/modules/users/entities/user.entity';

const DatabaseConfigModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ig',
  entities: [
    User,
    Comic,
    Chapter,
    Source,
    Genres,
    History,
    Genres,
    ComicGenres,
  ],
  synchronize: true,
});
export default DatabaseConfigModule;
