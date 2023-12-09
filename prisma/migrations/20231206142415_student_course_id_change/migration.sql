/*
  Warnings:

  - The primary key for the `StudentCourse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `StudentCourse` table. All the data in the column will be lost.
  - You are about to drop the column `studentCourseId` on the `StudentCourse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `StudentCourse` DROP PRIMARY KEY,
    DROP COLUMN `name`,
    DROP COLUMN `studentCourseId`,
    ADD PRIMARY KEY (`studentId`, `courseId`);
