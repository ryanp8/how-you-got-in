-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "apScores" TEXT,
ADD COLUMN     "highSchool" TEXT,
ALTER COLUMN "actScore" DROP NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL,
ALTER COLUMN "satScore" DROP NOT NULL;
