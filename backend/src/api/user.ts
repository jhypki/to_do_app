import userService from "../services/userService";
import { auth } from "../middleware/auth";
import { Express } from "express";

const service = new userService();

export default async function(app: Express) {
    app.post('/user/register', async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const result = await service.CreateUser(username, email, password);
            res.status(201).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    app.post('/user/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const result = await service.Login(email, password);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    );
}