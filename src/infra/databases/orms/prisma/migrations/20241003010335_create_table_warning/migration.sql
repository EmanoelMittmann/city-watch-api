-- CreateTable
CREATE TABLE "warnings" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "localization_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "warnings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "warnings_localization_id_key" ON "warnings"("localization_id");

-- CreateIndex
CREATE UNIQUE INDEX "warnings_user_id_key" ON "warnings"("user_id");

-- AddForeignKey
ALTER TABLE "warnings" ADD CONSTRAINT "warnings_localization_id_fkey" FOREIGN KEY ("localization_id") REFERENCES "localizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "warnings" ADD CONSTRAINT "warnings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
