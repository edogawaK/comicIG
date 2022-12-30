import { Inject } from '@nestjs/common';
import { Request } from 'express';

export class BaseService {
  protected limit;
  protected request: Request;

  constructor(@Inject('REQUEST') request: Request) {
    this.request = request;
    this.limit = 10;
    if (+request.query.limit) {
      this.limit = +request.query.limit;
    }
  }
}
