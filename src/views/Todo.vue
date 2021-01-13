<template>
    <div id="todolista">
        <div class="tasksinput">
            <input type="text" placeholder="Aquí va la nueva tarea" v-model="newTask" @keyup.enter="addNewTask">
            <button @click="addNewTask;">+</button>
        </div>
        <div class="taskstodo">
            <span>--- Tareas pendientes --------------------</span>
            <div class="task" v-for="(task, index) in tasks" :key="`task-${index}`">
                <input type="checkbox" :checked="task.done" :value="task.done" @click="setTaskState(idx)">
                <span>{{task.title}}</span>
            </div>
        </div>
        <div class="tasksdone">
            <span>--- Tareas listas ----------------------------</span>
            <div class="task" v-for="(taskDone, index) in tasksDone" :key="`task-${index}`">
                <span>{{taskDone}}</span>
            </div>
        </div>
    </div>
</template>





<script>
export default {
    name: "Todo",
    data(){
        return{
            newTask: '',
            tasks:[],
            tasksDone:[],
        }
    },
    methods:{
        addNewTask(){
            const taskToAdd = {
                title : this.newTask,
                done:false,
            }
            this.tasks.push(taskToAdd);
            this.newTask = '';
        },
        setTaskState(idx){
            this.tasks[idx].done = !this.tasks[idx].done;
            const taskDone = this.tasks[idx].title;
            if (this.tasks[idx].done == true){
            this.tasksDone.push(taskDone);
            }
        },
    },
}
</script>

<style>

</style>