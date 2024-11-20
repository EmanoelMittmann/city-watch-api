-- CreateEnum
CREATE TYPE "DEFAULT_NAME_RATING" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "name_rating" "DEFAULT_NAME_RATING" NOT NULL,
    "problem_id" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
