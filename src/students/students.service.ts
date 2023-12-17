import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Course } from 'src/courses/entities/course.entity';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) { }

  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({ data: createStudentDto })
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

  assignCoursetoStudent(studentId: number, courseId: number) {
    console.log("Student", studentId, "=======Course", courseId);
    return this.prisma.studentCourse.create({
      data: {
        student: { connect: { studentId: studentId } },
        course: { connect: { courseId: courseId } },
      },
    });
  }

  findCoursesPerStudent(id: number) {
    // return this.prisma.studentCourse.findMany({select: {studentId: true, course: {select: {name: true}}}, where:{studentId: id}});
    return this.prisma.course.findMany({select: {courseId: true, name: true}, where:{studentCourse: {some: {studentId: id}}}},);
  }

  subjectsPerStudent() {
    // return this.prisma.studentCourse.findMany({select:{course:{select:{name: true}}}, orderBy:{course: {}}})
  }

}
