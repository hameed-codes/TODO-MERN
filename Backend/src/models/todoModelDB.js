import mongoose from "mongoose";
import { todoSchema } from "../schema/todoSchema.js";
 
const todoModel = mongoose.model('todo-collection', todoSchema)

export default todoModel;