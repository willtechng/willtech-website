import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.schema';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private model: Model<CourseDocument>) {}

  async create(dto: CreateCourseDto) {
    const course = await this.model.create(dto);
    return { success: true, data: course };
  }

  async findAll() {
    const data = await this.model.find().sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async findActive() {
    const data = await this.model.find({ status: 'active' }).sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async findOne(id: string) {
    const course = await this.model.findById(id);
    if (!course) throw new NotFoundException('Course not found');
    return { success: true, data: course };
  }

  async update(id: string, dto: UpdateCourseDto) {
    const course = await this.model.findByIdAndUpdate(id, dto, { new: true });
    if (!course) throw new NotFoundException('Course not found');
    return { success: true, data: course };
  }

  async remove(id: string) {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Course not found');
    return { success: true, message: 'Course deleted' };
  }
}
