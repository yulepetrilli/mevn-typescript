import { Router } from "express";
import Task from '../models/Tasks';

const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

router.post('/tasks', async (req, res) => {
    const {title, description} = req.body;
    const task = new Task({title, description});

    await task.save();
    res.json(task);
});

router.get('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({message: 'Task not found'})
        };

        res.send(task);
    }catch(err){
        return res.status(500).send(err);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);

        if(!task){
            return res.status(404).json({message: 'Task not found'})
        };

        res.json(task);
    }catch(err){
        return res.status(500).send(err);
    }
});

router.put('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const updateValues = req.body;
    const updatedTask =  await Task.findByIdAndUpdate(id, updateValues,{
        new: true,
    });
    res.json(updatedTask)
});

export default router;