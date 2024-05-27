import { Schema, model } from 'mongoose';

export interface ITask{
    title: string;
    description: string;
    status: string;
    userId: string;
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    userId: { type: String, required: true }
});

export default model('Task', taskSchema);