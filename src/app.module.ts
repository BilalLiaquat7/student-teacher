import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { TeachersModule } from './teachers/teachers.module';
import { TasksModule } from './tasks/tasks.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [PrismaModule, StudentsModule, CoursesModule, TeachersModule, TasksModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
