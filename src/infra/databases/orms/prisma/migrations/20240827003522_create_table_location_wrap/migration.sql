-- CreateTable
CREATE TABLE "location_wrap" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "geo_location_x" DECIMAL NOT NULL,
    "geo_location_y" DECIMAL NOT NULL,

    CONSTRAINT "location_wrap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "location_wrap_uuid_key" ON "location_wrap"("uuid");
