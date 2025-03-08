import { makeAutoObservable } from "mobx";
class TaskStore{
    tasks=[];
    completeTasks=[]
    id=0
    constructor(){
        makeAutoObservable(this)
    }
      
    
    addTask(date,taskData,starttime,endtime){
        this.id++
       const newTask = {
        id:this.id,
        date:date,
        task:taskData,
        starttime:starttime,
        endtime:endtime
        
       }
   
       this.tasks.push(newTask);
    }
    updateTask(id, updatedTask) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].task = updatedTask;
        }
    }
    completeTask(id) {
        const removedTask = this.tasks.find((item) => item.id === id);
        
        if (removedTask) {
            this.completeTasks.push(removedTask);  // Store in deleted tasks
            this.tasks = this.tasks.filter((item) => item.id !== id); // Remove from tasks
        }
    }
}

 

const taskStore = new TaskStore();
export default taskStore;