import { Request, Response } from "express";
import app, { prisma } from "./app";

const port: number = 3000;

const main = async () => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
