import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCourseDto: CreateCourseDto): import(".prisma/client").Prisma.Prisma__CourseClient<{
        courseId: number;
        name: string;
        teacherId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        courseId: number;
        name: string;
        teacherId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CourseClient<{
        courseId: number;
        name: string;
        teacherId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCourseDto: UpdateCourseDto): string;
    remove(id: number): string;
}
