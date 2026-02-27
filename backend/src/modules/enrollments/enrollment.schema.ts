import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EnrollmentDocument = Enrollment & Document;

@Schema({ timestamps: true })
export class Enrollment {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  courseName: string;

  @Prop({ required: true })
  coursePrice: number;

  @Prop()
  hearAboutUs: string;

  @Prop({ enum: ['pending', 'paid'], default: 'pending' })
  paymentStatus: string;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);
