export const DatabaseConfigDefault = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ig',
  autoLoadEntities: true,
  synchronize: true,
};

export const DatabaseConfig = {
  default: DatabaseConfigDefault,
  backup: {
    ...DatabaseConfigDefault,
    host: 'sql.freedb.tech',
    port: 3306,
    username: 'freedb_edogawa',
    password: '?23*PZPg!EsG#Qx',
    database: 'freedb_edogawa_ig',
    name: 'backup',
  },
};
