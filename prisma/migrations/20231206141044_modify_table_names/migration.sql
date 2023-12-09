/*
  Warnings:

  - You are about to drop the `Student_Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Student_Course` DROP FOREIGN KEY `Student_Course_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `Student_Course` DROP FOREIGN KEY `Student_Course_studentId_fkey`;

-- DropTable
DROP TABLE `Student_Course`;

-- CreateTable
CREATE TABLE `StudentCourse` (
    `studentId` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,
    `studentCourseId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`studentCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StudentCourse` ADD CONSTRAINT `StudentCourse_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentCourse` ADD CONSTRAINT `StudentCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;
