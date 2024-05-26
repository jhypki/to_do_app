import UserRepository from "../database/repository/userRepository";
import { generateSalt, hashPassword, comparePassword, generateToken, verifyToken } from "../utils/index";
import { IUser } from "../database/models/User";

export default class userService{
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    async CreateUser(username: string, email: string, password: string){
        try{
            
            const salt = await generateSalt();
            const hashedPassword = await hashPassword(password, salt);
            const result = await this.userRepository.CreateUser(username, email, hashedPassword);
            const token = await generateToken(result);
            return { user: result, token };
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async GetUserByEmail(email: string){
        try{
            const user = await this.userRepository.GetUserByEmail(email);
            return user;
        }
        catch(error){
            throw new Error(error as string);
        }
    }
    async GetUserByUsername(username: string){
        try{
            const user = await this.userRepository.GetUserByUsername(username);
            return user;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async GetUserById(id: string){
        try{
            const user = await this.userRepository.GetUserById(id);
            return user;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async Login(email: string, password: string){
        try{
            const user = await this.GetUserByEmail(email);
            if(!user){
                throw new Error('User not found');
            }

            const isPasswordValid = await comparePassword(password, user.password);
            if(!isPasswordValid){
                throw new Error('Invalid password');
            }

            const token = await generateToken(user);
            return { user, token };
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async VerifyToken(token: string){
        try{
            const payload = await verifyToken(token);
            return payload;
        }
        catch(error){
            throw new Error(error as string);
        }
    }
}