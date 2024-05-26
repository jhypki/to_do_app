import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "./database/connection";

dotenv.config();

const StartServer = async () => {
  const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

await connect();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
}

StartServer();