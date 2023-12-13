import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherDto: CreateTeacherDto): import(".prisma/client").Prisma.Prisma__TeacherClient<{
        teacherId: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        teacherId: number;
        name: string;
        email: string;
        phone: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateTeacherDto: UpdateTeacherDto): string;
    remove(id: string): string;
}
