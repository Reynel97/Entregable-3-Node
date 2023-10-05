import { Router } from "express";
import {createTask, deleteTask, updateTask } from "./tasks.controllers.js";

const router = Router();

router.route('/tasks')
    .post(createTask)
    

router.route('/tasks/:id')
    .delete(deleteTask)
    .put(updateTask)
export default router;