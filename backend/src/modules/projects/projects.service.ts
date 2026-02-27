import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './project.schema';
import { CreateProjectDto, UpdateProjectDto } from './project.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private model: Model<ProjectDocument>) {}

  async create(dto: CreateProjectDto) {
    const project = await this.model.create(dto);
    return { success: true, data: project };
  }

  async findAll() {
    const data = await this.model.find().sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async findLive() {
    const data = await this.model.find({ status: 'live' }).sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async update(id: string, dto: UpdateProjectDto) {
    const project = await this.model.findByIdAndUpdate(id, dto, { new: true });
    if (!project) throw new NotFoundException('Project not found');
    return { success: true, data: project };
  }

  async remove(id: string) {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Project not found');
    return { success: true, message: 'Project deleted' };
  }
}
