export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ig',
  entities: [__dirname + 'src/**/*.entity.ts'],
  synchronize: true,
  seeds: ['src/database/seeder/**/*{.ts,.js}'],
  factories: ['src/seeder/factories/**/*{.ts,.js}'],
};
