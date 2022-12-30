import { HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { generateID } from 'src/helpers/generateId';
import { Repository } from 'typeorm';
import SigninDTO from '../dtos/signin.dto';
import SignupDTO from '../dtos/signup.dto';
import { User } from '../entities/user.entity';

class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validate(params: SigninDTO) {
    const { email, password } = params;
    const user = await this.usersRepository.findOneBy({ email, password });
    if (!user) {
      throw new HttpException('Signin Failed', 404);
    }
    return user;
  }

  renderToken(user: any) {
    const { password, ...result } = user;
    console.log(result);
    return {
      ...result,
      token: this.jwtService.sign({ id: user.id }),
    };
  }

  async signup(params: SignupDTO) {
    const { email, password } = params;
    const user = await this.usersRepository.create({
      id: generateID(),
      email,
      password,
    });
    await this.usersRepository.save(user);
  }
}

export default AuthService;
