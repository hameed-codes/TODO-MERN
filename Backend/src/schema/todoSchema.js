import mongoose from "mongoose";
import { boolean, trim } from "zod";

export const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            default: ''
        },
        completed: {
            type:Boolean,
            default:false
        }
    }, { timestamps: true }
)