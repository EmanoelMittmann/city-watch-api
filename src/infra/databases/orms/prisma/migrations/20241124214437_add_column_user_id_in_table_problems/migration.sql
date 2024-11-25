-- AlterTable
ALTER TABLE "problems" ADD COLUMN     "user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "problems" ADD CONSTRAINT "problems_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
