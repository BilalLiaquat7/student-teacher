import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
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
    findOne(id: string): string;
    update(id: string, updateStudentDto: UpdateStudentDto): string;
    remove(id: string): string;
    findCoursesPerStudent(id: string): void;
}
