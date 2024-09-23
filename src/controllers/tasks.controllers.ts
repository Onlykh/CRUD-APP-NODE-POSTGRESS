import { Request, Response } from "express";
import { prisma } from "../app";
import { jsonStringify } from "../utils/utils";
import { Task } from "@prisma/client";
import { CreateTaskRequest } from "../validators/CreateTaskRequest.validators";

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks: Task[] | [] = await prisma.task.findMany();
    res.send({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: [],
    });
  }
};

const getTaskById = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const task: Task | null = await prisma.task.findFirst({
      where: {
        id: Number(taskId),
      },
    });
    res.send({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: {},
    });
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const { entitled, description } = req.body;
    const validationResult = CreateTaskRequest(entitled, description);

    const newTask = await prisma.task.create({
      data: validationResult,
    });

    res.send({
      success: true,
      data: newTask,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: {},
    });
  }
};

export { getTasks, getTaskById, createTask };
