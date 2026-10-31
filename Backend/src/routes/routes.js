import express from 'express'
import { activeTasks, addTask, completedTasks, uncompleteTask, completeTask, deleteTask, updateTask } from '../controllers/toDo_controller.js';

const router = express.Router();

router.post('/addTask', addTask); 
router.get('/activeTask', activeTasks); //uncompleted tasks
router.get('/completedTask', completedTasks)
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask)
router.put('/doneTask/:id', completeTask)
router.put('/undoneTask/:id', uncompleteTask)

export default router;