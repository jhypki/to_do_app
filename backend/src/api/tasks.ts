import TaskService from "../services/tasksService";
import { auth } from "../middleware/auth";
import { Express } from "express";

const service = new TaskService();

export default async function(app: Express) {
    app.post('/task', auth, async (req, res) => {
        const { title, description } = req.body;
        const userId = (req as any).userId;
        try {
            const result = await service.CreateTask(title, description, userId);
            res.status(201).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    app.get('/task', auth, async (req, res) => {
        const userId = req.body.userId;
        try {
            const result = await service.GetTasksByUserId(userId);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    app.get('/task/:id', auth, async (req, res) => {
        const id = req.params.id;
        try {
            const result = await service.GetTaskById(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    app.put('/task/:id', auth, async (req, res) => {
        const id = req.params.id;
        const status = req.body.status;
        try {
            const result = await service.UpdateTaskStatus(id, status);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    app.delete('/task/:id', auth, async (req, res) => {
        const id = req.params.id;
        try {
            const result = await service.DeleteTask(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });
}