import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';
import { CreateContactDto } from './contact.dto';

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private model: Model<ContactDocument>) {}

  async create(dto: CreateContactDto) {
    const contact = await this.model.create(dto);
    return { success: true, message: 'Message received. We will get back to you within 24 hours.', data: contact };
  }

  async findAll() {
    const data = await this.model.find().sort({ createdAt: -1 });
    return { success: true, count: data.length, data };
  }

  async markRead(id: string) {
    const contact = await this.model.findByIdAndUpdate(id, { isRead: true }, { new: true });
    if (!contact) throw new NotFoundException('Contact not found');
    return { success: true, data: contact };
  }

  async remove(id: string) {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Contact not found');
    return { success: true, message: 'Deleted' };
  }
}
