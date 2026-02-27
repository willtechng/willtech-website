import { Injectable, UnauthorizedException, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Admin, AdminDocument } from './admin.schema';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private jwtService: JwtService,
  ) {}


  async onModuleInit() {
    const exists = await this.adminModel.findOne({ email: process.env.ADMIN_EMAIL });
    if (!exists) {
      const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin?123', 10);
      await this.adminModel.create({
        email: process.env.ADMIN_EMAIL || 'admin@willtechng.com',
        password: hashed,
      });
      console.log(' Default admin account created');
    }
  }

  async login(email: string, password: string) {
    const admin = await this.adminModel.findOne({ email });
    if (!admin) throw new UnauthorizedException('Invalid credentials');

    const match = await bcrypt.compare(password, admin.password);
    if (!match) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: admin._id, email: admin.email, role: admin.role };
    return {
      access_token: this.jwtService.sign(payload),
      admin: { email: admin.email, role: admin.role },
    };
  }

  async validateAdmin(payload: any) {
    return this.adminModel.findById(payload.sub);
  }
}
