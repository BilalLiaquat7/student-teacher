import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('students')
@UseGuards(AuthGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }

  @Get('find-courses-for-student/:id')
  findCoursesPerStudent(@Param('id') id: string) {
    return this.studentsService.findCoursesPerStudent(+id);
  }

  @Post(':studentId/courses/:courseId')
  assignCoursetoStudent(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string) {
    return this.studentsService.assignCoursetoStudent(+studentId, +courseId);
  }

  @Get('find-students-per-subjects')
  subjectsPerStudent() {
    return this.studentsService.subjectsPerStudent();
  }
}
