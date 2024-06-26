import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../database/models/User';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}

export const generateSalt = async ( ) => {
    return await bcrypt.genSalt();
}

export const hashPassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
}

export const generateToken = async (payload: IUser) => {
    try{
        const { _id, username, email } = payload;

        return jwt.sign({ _id, username, email }, JWT_SECRET, 
            { expiresIn: '1d' }
        );
    }
    catch(error){
        throw new Error(error as string);
    }
}

export const verifyToken = async (token: string) => {
    try{
        return jwt.verify(token, JWT_SECRET!);
    }
    catch(error){
        throw new Error(error as string);
    }
}

export const getUsernameFromToken = async (token: string): Promise<string | null> => {
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET!) as jwt.JwtPayload;
        return decodedToken.username || null;
    } catch (error) {
        throw new Error(error as string);
    }
}

export const GetUserIdFromToken = async (token: string): Promise<string | null> => {
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET!) as jwt.JwtPayload;
        return decodedToken._id || null;
    } catch (error) {
        throw new Error(error as string);
    }
}
