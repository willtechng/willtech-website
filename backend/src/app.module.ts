import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { BlogModule } from './modules/blog/blog.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { CoursesModule } from './modules/courses/courses.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/willtech-ng'),
    AuthModule,
    EnrollmentsModule,
    ContactsModule,
    BlogModule,
    ProjectsModule,
    CoursesModule,
  ],
})
export class AppModule {}
