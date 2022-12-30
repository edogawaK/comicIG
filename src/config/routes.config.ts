import { RouterModule } from '@nestjs/core';
import { ComicsModule } from 'src/modules/comics/comic.module';

export const RouteConfig = RouterModule.register([
  // {
  // path: '/comics',
  // module: ComicsModule,
  // children: [
  //   {
  //     path: '/chapters',
  //   },
  //   {
  //     path: 'metrics',
  //     module: MetricsModule,
  //   },
  // ],
  // },
]);
