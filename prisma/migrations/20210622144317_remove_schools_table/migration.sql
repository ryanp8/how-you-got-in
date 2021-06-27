/*
  Warnings:

  - You are about to drop the column `schoolId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `School` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `school` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_schoolId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "schoolId",
ADD COLUMN     "school" TEXT NOT NULL;

-- DropTable
DROP TABLE "School";
