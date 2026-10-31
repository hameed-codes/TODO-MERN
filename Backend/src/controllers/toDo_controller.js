import todoModel from "../models/todoModelDB.js";

export const addTask = async (req, res) => {
    try {
        console.log(req.body)
        const task = await todoModel.create(req.body);
        res.status(201).send(task)
        console.log('Task added')
    } catch (err) {
        next(err)
    }
}

export const activeTasks = async (req, res)=> {
    try {
        const todoData = await todoModel.find({completed:false});
        res.status(200).json(todoData);
        console.log('data sent')
    } catch (err) {
        next(err)
    }
}

export const completedTasks = async (req, res)=> {
    try {
        const todoData = await todoModel.find({completed:true});
        res.status(200).json(todoData);
        console.log('data sent')
    } catch (err) {
        next(err)
    }
}

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(404).json({
                message: "provide a valid id"
            })
        }

        const deletedTask = await todoModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Task deleted Successfully!",
            info: deletedTask
        })

    } catch (err) {
        next(err)
    }
} 


export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(404).json({
                message: "provide a valid id"
            })
        }

        const {title, description} = req.body;

        console.log(id)
        console.log(title, description)

        const task = await todoModel.findByIdAndUpdate(
            id,
            {title, description},
            {returnDocument: 'after'}
        )

        res.status(201).json({
            message: "Updated Successfully!",
            task: task
        })

    } catch (err) {
        next(err)
    }
}

export const completeTask = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(404).json({
                message: "provide a valid id"
            })
        }

        const completedTask = await todoModel.findByIdAndUpdate(
            id,
            {completed: true},
            {returnDocument: 'after'}
        )

        res.status(201).json({
            message: "completed Successfully!",
            task: completedTask
        })

    } catch (err) {
        next(err)
    }
}

export const uncompleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(404).json({
                message: "provide a valid id"
            })
        }

        const completedTask = await todoModel.findByIdAndUpdate(
            id,
            {completed: false},
            {returnDocument: 'after'}
        )

        res.status(201).json({
            message: "retrived Successfully!",
            task: completedTask
        })

    } catch (err) {
        next(err)
    }
}