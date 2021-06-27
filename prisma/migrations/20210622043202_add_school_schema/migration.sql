/*
  Warnings:

  - You are about to drop the column `school` on the `Post` table. All the data in the column will be lost.
  - Added the required column `schoolId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "school",
ADD COLUMN     "schoolId" TEXT NOT NULL,
ALTER COLUMN "extracurriculars" SET NOT NULL,
ALTER COLUMN "extracurriculars" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
