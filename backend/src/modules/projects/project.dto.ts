import { IsString, IsNotEmpty, IsOptional, IsArray, IsEnum } from 'class-validator';

export class CreateProjectDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() @IsNotEmpty() description: string;
  @IsString() @IsNotEmpty() category: string;
  @IsArray() @IsOptional() technologies?: string[];
  @IsString() @IsOptional() imageUrl?: string;
  @IsString() @IsOptional() projectUrl?: string;
  @IsEnum(['live', 'hidden']) @IsOptional() status?: string;
}

export class UpdateProjectDto {
  @IsString() @IsOptional() title?: string;
  @IsString() @IsOptional() description?: string;
  @IsString() @IsOptional() category?: string;
  @IsArray() @IsOptional() technologies?: string[];
  @IsString() @IsOptional() imageUrl?: string;
  @IsEnum(['live', 'hidden']) @IsOptional() status?: string;
}
