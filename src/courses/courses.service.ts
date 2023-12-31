import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}
  
  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({data: createCourseDto});
  }

  findAll() {
    return this.prisma.course.findMany({});
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({where:{courseId: id}})
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
