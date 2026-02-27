import { IsEmail, IsString, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  courseName: string;

  @IsNumber()
  @Min(0)
  coursePrice: number;

  @IsString()
  @IsOptional()
  hearAboutUs?: string;
}
