import User from "../models/User";

export default class UserRepository {
    async CreateUser(username: string, email: string, password: string) {
        try {
            const user = new User({ username, email, password });
            const result = await user.save();
            return result;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async GetUserByEmail(email: string) {
        try {
            const user = await User.findOne({ email });
            return user;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async GetUserById(id: string) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            throw new Error(error as string);
        }
    }
}