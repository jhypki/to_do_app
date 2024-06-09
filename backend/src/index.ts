import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import { connect } from "./database/connection";
import user from "./controllers/user";
import tasks from "./controllers/tasks";
import cors from "cors";


const StartServer = async () => {
    const app: Express = express();
    const port = process.env.PORT || 5000;

    app.use(express.json());
    app.use(cors());

    await connect();
    user(app);
    tasks(app);


    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

StartServer();