import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateStudentDto {
  
  @IsString()
  @MaxLength(30)
  readonly name: string;
  // @IsString()
  // @IsNotEmpty()
  // readonly class: string;
  // @IsString()
  // @MaxLength(30)
  // @IsNotEmpty()
  // readonly gender: string;
  // @IsString()
  // @IsNotEmpty()
  // readonly marks: string;
  @IsString()
  readonly username:string;
  readonly email:string;
  readonly phoneno:string;
  readonly password:string;
  readonly confirmPassword:string;
}
