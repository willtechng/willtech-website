import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogPost, BlogPostDocument } from './blog.schema';
import { CreateBlogPostDto, UpdateBlogPostDto } from './blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(BlogPost.name) private model: Model<BlogPostDocument>) {}

  private slugify(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();
  }

  async create(dto: CreateBlogPostDto) {
    const slug = this.slugify(dto.title);
    const post = await this.model.create({ ...dto, slug });
    return { success: true, data: post };
  }

  async findAll() {
    const data = await this.model.find().sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async findPublished() {
    const data = await this.model.find({ status: 'published' }).sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async findOne(id: string) {
    const post = await this.model.findById(id);
    if (!post) throw new NotFoundException('Post not found');
    return { success: true, data: post };
  }

  async update(id: string, dto: UpdateBlogPostDto) {
    const post = await this.model.findByIdAndUpdate(id, dto, { new: true });
    if (!post) throw new NotFoundException('Post not found');
    return { success: true, data: post };
  }

  async remove(id: string) {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Post not found');
    return { success: true, message: 'Post deleted' };
  }
}
