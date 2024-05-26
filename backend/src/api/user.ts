import userService from "../services/userService";
import { Express } from "express";

const service = new userService();

export default async function (app: Express) {
    app.post('/user/register', async (req, res) => {
        const { username, email, password } = req.body;
        if (await service.GetUserByEmail(email)) {
            return res.status(400).send('User already exists');
        }
        if (await service.GetUserByUsername(username)) {
            return res.status(400).send('Username is taken');
        }
        try {
            const result = await service.CreateUser(username, email, password);
            return res.status(201).send(result);
        } catch (error) {
            return res.status(400).send(error);
        }
    });

    app.post('/user/login', async (req, res) => {
        const { email, password } = req.body;
        if(await service.GetUserByEmail(email)){
            return res.status(400).send('User not found');
        }
        try {
            const result = await service.Login(email, password);
            return res.status(200).send(result);
        } catch (error) {
            return res.status(400).send(error);
        }
    });
}
