import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        courseId: number;
        name: string;
        teacherId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateCourseDto: UpdateCourseDto): string;
    remove(id: string): string;
}
