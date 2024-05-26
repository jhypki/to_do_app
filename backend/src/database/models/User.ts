import { Schema, model } from 'mongoose';

export interface IUser{
    username: string;
    email: string;
    password: string;
    tasks: string[];
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

export default model('User', userSchema);