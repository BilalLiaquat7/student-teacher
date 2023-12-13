import { ApiProperty } from "@nestjs/swagger";

export class CreateTeacherDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    phone: string
}
