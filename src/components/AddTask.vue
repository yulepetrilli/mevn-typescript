<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="saveTask()" class="card card-body">
            <h1 class="text-center">Add New Task</h1>
            <label for="enterTask" class="form-label mt-4">Task Name</label>
            <input 
                type="text" 
                class="form-control" 
                id="enterTask"  
                placeholder="Enter task name" 
                v-model="task.title"
            >
            <label for="enterDescription" class="form-label mt-4">Task Description</label>
            <textarea 
                class="form-control" 
                id="enterDescription" 
                rows="3" 
                placeholder="Enter task description" 
                v-model="task.description"
            ></textarea>
            <button 
                type="submit" 
                class="btn btn-primary mt-4"
                :disabled="!task.title || !task.description"
            >
                Add Task
            </button>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {Task} from '@/interfaces/Task'
    import {addTask} from '@/api/TaskServices';

    export default defineComponent({
        data(){
            return{
                task: {} as Task
            }
        },
        methods: {
            async saveTask(){
                const res = await addTask(this.task);
                console.log(res)
                this.$router.push({name: 'tasks'})
            }
        }
    })
    
</script>