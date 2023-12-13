import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeachersService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): string;
    update(id: number, updateTeacherDto: UpdateTeacherDto): string;
    remove(id: number): string;
}
