import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createStudentDto: CreateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<{
        studentId: number;
        name: string;
        dob: string;
        email: string;
        address: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        studentId: number;
        name: string;
        dob: string;
        email: string;
        address: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateStudentDto: UpdateStudentDto): string;
    remove(id: number): string;
    assignCoursetoStudent(studentId: number, courseId: number): void;
    findCoursesPerStudent(id: number): void;
}
