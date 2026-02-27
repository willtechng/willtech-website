import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment, EnrollmentDocument } from './enrollment.schema';
import { CreateEnrollmentDto } from './enrollment.dto';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectModel(Enrollment.name) private model: Model<EnrollmentDocument>,
  ) {}

  async create(dto: CreateEnrollmentDto) {
    const enrollment = await this.model.create(dto);
    return { success: true, message: 'Enrollment submitted successfully. Our team will contact you within 24 hours.', data: enrollment };
  }

  async findAll() {
    const data = await this.model.find().sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async update(id: string, dto: Partial<CreateEnrollmentDto & { paymentStatus: string }>) {
    const enrollment = await this.model.findByIdAndUpdate(id, dto, { new: true });
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    return { success: true, message: 'Enrollment updated', data: enrollment };
  }

  async markAsPaid(id: string) {
    const enrollment = await this.model.findByIdAndUpdate(
      id,
      { paymentStatus: 'paid' },
      { new: true },
    );
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    return { success: true, message: 'Payment status updated', data: enrollment };
  }

  async remove(id: string) {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Enrollment not found');
    return { success: true, message: 'Enrollment deleted' };
  }

  async getStats() {
    const total = await this.model.countDocuments();
    const pending = await this.model.countDocuments({ paymentStatus: 'pending' });
    const paid = await this.model.countDocuments({ paymentStatus: 'paid' });
    return { total, pending, paid };
  }
}
