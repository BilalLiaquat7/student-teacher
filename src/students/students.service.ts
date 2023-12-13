import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Course } from 'src/courses/entities/course.entity';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}
  
  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({data: createStudentDto})
  }

  findAll() {
    return this.prisma.student.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} student FindOne`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student Update`;
  }

  remove(id: number) {
    return `This action removes a #${id} student remove`;
  }

  assignCoursetoStudent(studentId: number, courseId: number){

  }

  findCoursesPerStudent(id: number) {
    let courses = this.prisma.studentCourse.findMany({where: {studentId: id }})
    console.log(courses);
  }

}
