<template>
  <div id="todolista">
    <div class="tasksinput">
      <input type="text" placeholder="Aquí va la nueva tarea">
      <br>
      <button>+</button>
    </div>
    <div class="taskstodo">
      <span>Tareas pendientes</span>
      <div class="task" v-for="(task, index) in tasks" :key="`task-${index}`"/>
      <span>{{task.title}}</span>
    </div>
    <div class="tasksdone">
      <span>Tareas listas</span>
    </div>
  </div>
  
</template>


<script>

export default {
  name: 'about',
  data(){
    return{
      newTask: '',
      tasks:[],
    }
  },
  methods:{
    addnewTask(){
      const taskToAdd = {
        title : this.newTask,
        done:false
      }
      this.tasks.push(taskToAdd);
      this.newTask = '';
    },
    setTaskState(idx){
      this.tasks[idx].done = !this.tasks[idx].done;
    }
  },
};
</script>

<style>
</style>