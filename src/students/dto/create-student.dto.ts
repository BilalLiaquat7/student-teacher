import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    dob: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    address: string;
}
