import { IsNotEmpty, IsString } from 'class-validator';

class SigninDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export default SigninDTO;
