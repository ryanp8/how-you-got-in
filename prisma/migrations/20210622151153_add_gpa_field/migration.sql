/*
  Warnings:

  - Added the required column `weightedGpa` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "weightedGpa" DOUBLE PRECISION NOT NULL;
