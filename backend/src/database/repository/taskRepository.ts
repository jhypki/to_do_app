import Task from "../models/Task";
import User from "../models/User";

export default class TaskRepository {
    async CreateTask(title: string, description: string, userId: string) {
        try {
            const status: string = 'open'
            const task = new Task({ title, description, status, userId});
            const result = await task.save();
            return result;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async GetTasksByUserId(user_id: string) {
        try {
            const tasks = await Task.find({ user_id });
            return tasks;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async GetTaskById(id: string){
        try {
            const task = await Task.findById(id);
            return task;
    }
        catch (error) {
            throw new Error(error as string);
        }
    }

    async UpdateTaskStatus(id: string, status: string){
        try {
            const task = await Task.findByIdAndUpdate(id, {status}, {new: true});
            return task;
        }
        catch (error) {
            throw new Error(error as string);
        }
    }

    async DeleteTask(id: string){
        try {
            const task = await Task.findByIdAndDelete(id);
            return task;
        }
        catch (error) {
            throw new Error(error as string);
        }
    }
}