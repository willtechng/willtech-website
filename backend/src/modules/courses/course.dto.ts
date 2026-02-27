import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEnum, Min } from 'class-validator';

export class CreateCourseDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() @IsNotEmpty() description: string;
  @IsNumber() @Min(0) price: number;
  @IsString() @IsNotEmpty() duration: string;
  @IsNumber() @Min(1) cohortSize: number;
  @IsEnum(['Beginner', 'Intermediate', 'Advanced']) @IsOptional() level?: string;
  @IsEnum(['active', 'inactive']) @IsOptional() status?: string;
}

export class UpdateCourseDto {
  @IsString() @IsOptional() title?: string;
  @IsString() @IsOptional() description?: string;
  @IsNumber() @IsOptional() @Min(0) price?: number;
  @IsString() @IsOptional() duration?: string;
  @IsNumber() @IsOptional() @Min(1) cohortSize?: number;
  @IsEnum(['Beginner', 'Intermediate', 'Advanced']) @IsOptional() level?: string;
  @IsEnum(['active', 'inactive']) @IsOptional() status?: string;
}
