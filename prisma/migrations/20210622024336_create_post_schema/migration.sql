/*
  Warnings:

  - Added the required column `actScore` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `satScore` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verified` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "actScore" INTEGER NOT NULL,
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "extracurriculars" TEXT[],
ADD COLUMN     "satScore" INTEGER NOT NULL,
ADD COLUMN     "school" TEXT NOT NULL,
ADD COLUMN     "verified" BOOLEAN NOT NULL;
