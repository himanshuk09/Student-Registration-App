import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateStudentDto {
  
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly class: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;
  @IsString()
  @IsNotEmpty()
  readonly marks: string;
}
