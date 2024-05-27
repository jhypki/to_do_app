import TaskRepository from "../database/repository/taskRepository";

export default class TaskService{
    private taskRepository: TaskRepository;
    constructor(){
        this.taskRepository = new TaskRepository();
    }
    async CreateTask(title: string, description: string, userId: string){
        try{
            const result = await this.taskRepository.CreateTask(title, description, userId);
            return result;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async GetTasksByUserId(userId: string){
        try{
            const tasks = await this.taskRepository.GetTasksByUserId(userId);
            return tasks;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async GetTasksByUserUsername(username: string){
        try{
            const tasks = await this.taskRepository.GetTasksByUserUsername(username);
            return tasks;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async GetTaskById(id: string){
        try{
            const task = await this.taskRepository.GetTaskById(id);
            return task;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async UpdateTaskStatus(id: string, status: string){
        try{
            const task = await this.taskRepository.UpdateTaskStatus(id, status);
            return task;
        }
        catch(error){
            throw new Error(error as string);
        }
    }

    async DeleteTask(id: string){
        try{
            const task = await this.taskRepository.DeleteTask(id);
            return task;
        }
        catch(error){
            throw new Error(error as string);
        }
    }
}