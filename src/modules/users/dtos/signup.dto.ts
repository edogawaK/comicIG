import { IsNotEmpty, IsString } from 'class-validator';

class SignupDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export default SignupDTO;
