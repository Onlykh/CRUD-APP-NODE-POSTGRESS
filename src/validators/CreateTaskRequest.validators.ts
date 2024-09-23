import { Prisma } from "@prisma/client";

const CreateTaskRequest = (entitled: string, description?: string) => {
  return Prisma.validator<Prisma.TaskCreateInput>()({
    entitled,
    description,
  });
};

export { CreateTaskRequest };
