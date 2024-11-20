/*
  Warnings:

  - The values [HEALTH] on the enum `PROBLEM_TYPE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PROBLEM_TYPE_new" AS ENUM ('LACK_OF_ENERGY', 'SANITATION', 'INFRASTRUCTURE', 'RISK_AREA', 'OTHERS');
ALTER TABLE "problems" ALTER COLUMN "problem_type" TYPE "PROBLEM_TYPE_new" USING ("problem_type"::text::"PROBLEM_TYPE_new");
ALTER TYPE "PROBLEM_TYPE" RENAME TO "PROBLEM_TYPE_old";
ALTER TYPE "PROBLEM_TYPE_new" RENAME TO "PROBLEM_TYPE";
DROP TYPE "PROBLEM_TYPE_old";
COMMIT;
