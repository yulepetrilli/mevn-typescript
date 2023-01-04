<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="handleUpdate()" class="card card-body">
            <h1 class="text-center">Task Details</h1>
            <label for="enterTask" class="form-label mt-4">Task Name</label>
            <input 
                type="text" 
                class="form-control" 
                id="enterTask"  
                placeholder="Enter task name" 
                v-model="currentTask.title"
            >
            <label for="enterDescription" class="form-label mt-4">Task Description</label>
            <textarea 
                class="form-control" 
                id="enterDescription" 
                rows="3" 
                placeholder="Enter task description" 
                v-model="currentTask.description"
            ></textarea>
            <button type="submit" class="btn btn-primary mt-4">Update Task</button>
        </form>
        <div class="text-center">
            <button 
                @click="handleDelete()" 
                type="submit" 
                class="btn btn-danger mt-4"
            >
                Delete Task
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import { deleteTask, getTaskById, updateTask } from '@/api/TaskServices';
    import { Task } from '@/interfaces/Task';

    export default defineComponent({
        data(){
            return{
                currentTask: {} as Task
            }
        },
        methods: {
            async loadTask(id: string){
                const res = await getTaskById(id);
                this.currentTask = res.data;
            },
            async handleUpdate(){
                if(typeof this.$route.params.id === 'string'){
                    const res = await updateTask(this.$route.params.id, this.currentTask);
                    this.$router.push({name: 'tasks'})
                }
            },
            async handleDelete(){
                if(typeof this.$route.params.id === 'string'){
                    const res = await deleteTask(this.$route.params.id );
                    this.$router.push({name: 'tasks'})
                }
            }
        },
        mounted(){
            console.log(this.$route.params.id)
            if(typeof this.$route.params.id === 'string'){
                this.loadTask(this.$route.params.id)
            }
        }
    });

</script>