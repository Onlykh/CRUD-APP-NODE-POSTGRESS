import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import router from "./routes/api.routes";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app: Express = express();
const routes: Router = router;
export const prisma: PrismaClient = new PrismaClient();

app.use(express.json());

app.use("/api", routes);

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Bad Request !");
});

export default app;
