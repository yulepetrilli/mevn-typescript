import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/tasks',
        name: 'tasks',
        component: () => import('@/components/TasksList.vue')
    },
    {
        path: '/tasks/addTask',
        name: 'add-tasks',
        component: () => import('@/components/AddTask.vue')
    },
    {
        path: '/tasks/:id',
        name: 'tasks-details',
        component: () => import('@/components/TaskDetails.vue')
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});