<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand">MEVN Task Manager</router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tasks/addTask" class="nav-link">Add New Task</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'nav-bar',
    });
</script>