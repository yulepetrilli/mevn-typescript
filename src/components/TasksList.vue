<template>
    <div class="col-md-4 offset-md-4">
        <div class="text-center">
            <h1>Tasks List</h1>
        </div>
        <ul class="list-group active">
            <li 
                v-for="(task, index) in tasks" 
                :key="task._id" 
                @click="$router.push(`/tasks/${task._id}`)"
                class="list-group-item  list-group-item-action"
                style="cursor: pointer"
            >
                {{(index + 1)}} - 
                {{task.title}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import { getTasks } from '@/api/TaskServices';
import { Task } from '@/interfaces/Task';

    export default defineComponent({
        data(){
            return{
                tasks: [] as Task[]
            }    
        },
        methods: {
            async loadTask(){
                const res = await getTasks();
                this.tasks = res.data;
            }
        },
        mounted(){
            this.loadTask();
        }
    })
    
</script>