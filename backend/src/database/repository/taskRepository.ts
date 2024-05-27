import Task from "../models/Task";
import User from "../models/User";
import { ITask } from "../models/Task";

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

    async GetTasksByUserId(userId: string) {
        try {
            const tasks = await Task.find({ userId });
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

    async GetTasksByUserUsername(username: string){
        try {
            const tasks = await Task.find({ username });
            return tasks;
        }
        catch (error) {
            throw new Error(error as string);
        }
    }

    async AddTaskToUser(userId: string, task: ITask){
        try {
            const result = await User.updateOne({ _id: userId }, { $push: { tasks: task } });
            return result;
        }
        catch (error) {
            throw new Error(error as string);
        }
    }
}