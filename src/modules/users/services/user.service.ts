import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../entities/user.entity';

class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
}

export default UserService;
