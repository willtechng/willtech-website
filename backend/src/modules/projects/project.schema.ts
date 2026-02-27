import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true }) title: string;
  @Prop({ required: true }) description: string;
  @Prop({ required: true }) category: string;
  @Prop({ type: [String], default: [] }) technologies: string[];
  @Prop({ default: '' }) imageUrl: string;
  @Prop({ default: '' }) projectUrl: string;
  @Prop({ enum: ['live', 'hidden'], default: 'live' }) status: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
