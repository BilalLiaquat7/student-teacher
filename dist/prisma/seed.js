"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const student = await prisma.student.create({
        data: {
            name: 'Muhammad Bilal Liaquat',
            dob: '7-7-1992',
            email: 'bilal.liaquat7@gmail.com',
            address: 'Iqbal town Rawalpindi'
        },
    });
    console.log(student);
}
main();
//# sourceMappingURL=seed.js.map