import { Schema, model } from 'mongoose';

interface ITask{
    title: string;
    description: string;
    status: string;
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true }
});

export default model('Task', taskSchema);