import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateBlogPostDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() @IsNotEmpty() excerpt: string;
  @IsString() @IsNotEmpty() content: string;
  @IsString() @IsNotEmpty() category: string;
  @IsString() @IsOptional() author?: string;
  @IsEnum(['published', 'draft']) @IsOptional() status?: string;
}

export class UpdateBlogPostDto {
  @IsString() @IsOptional() title?: string;
  @IsString() @IsOptional() excerpt?: string;
  @IsString() @IsOptional() content?: string;
  @IsString() @IsOptional() category?: string;
  @IsEnum(['published', 'draft']) @IsOptional() status?: string;
}
