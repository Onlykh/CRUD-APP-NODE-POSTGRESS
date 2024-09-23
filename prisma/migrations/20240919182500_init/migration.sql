-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "entitled" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_entitled_key" ON "Task"("entitled");
