/*
  Warnings:

  - You are about to drop the `location_wrap` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "location_wrap";

-- CreateTable
CREATE TABLE "localizations" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "is_incident" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "localizations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "localizations" ADD CONSTRAINT "localizations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
