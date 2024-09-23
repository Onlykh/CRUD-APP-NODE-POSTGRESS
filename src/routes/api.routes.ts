import { Router } from "express";
import { getTaskById, getTasks } from "../controllers/tasks.controllers";

const router: Router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:taskId", getTaskById);

export default router;
