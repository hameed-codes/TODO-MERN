import mongoose from "mongoose";
import { todoSchema } from "../schema/todoSchema.js";
 
const todoModel = mongoose.model('todos', todoSchema, 'todo-collection')

export default todoModel;