import {
  IsNotEmpty,
  IsNumber, IsOptional,
  IsPositive,
  IsString,
  MinLength
} from "class-validator";

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(11)
  @IsPositive()
  number: number;
}
export class LoginDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  number: number;

  @IsOptional()
  @IsNumber()
  code: number;
}
