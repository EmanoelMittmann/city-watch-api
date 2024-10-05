-- CreateEnum
CREATE TYPE "PROBLEM_TYPE" AS ENUM ('LACK_OF_ENERGY', 'SANITATION', 'HEALTH', 'RISK_AREA');

-- CreateTable
CREATE TABLE "problems" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "problem_type" "PROBLEM_TYPE" NOT NULL,

    CONSTRAINT "problems_pkey" PRIMARY KEY ("id")
);
