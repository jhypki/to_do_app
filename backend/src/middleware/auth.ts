import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized');
    }

    const token = authHeader.split(' ')[1];

    try {
        const isAuthorized = await verifyToken(token); // Use the extracted token here
        if (isAuthorized) {
            next();
        } else {
            return res.status(401).send('Unauthorized');
        }
    } catch (error) {
        return res.status(401).send('Unauthorized');
    }
};
