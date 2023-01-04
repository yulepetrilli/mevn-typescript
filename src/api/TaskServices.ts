import axios from './axios';
import { Task } from '@/interfaces/Task';

export const getTasks = async () => await axios.get('/tasks');

export const getTaskById = async (id: string) => await axios.get('/tasks/' + id);

export const addTask = async (task: Task) => await axios.post('/tasks', task);

export const updateTask = async (id: string, task: Task) => await axios.put('/tasks/' + id, task);

export const deleteTask = async (id: string) => await axios.delete('/tasks/' + id);