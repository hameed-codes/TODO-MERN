import React, { useState } from 'react'
import { HiXCircle } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast'
import EditForm from './EditForm';

const TaskBox = ({ task, onDone, onDelete }) => {

    const [editForm, setEditForm] = useState(false)

    return (
        <>
            <div className='flex flex-col p-3 border border-gray-300 rounded-xl text-gray-900 gap-3 shadow-xl relative hover:bg-amber-100 cursor-pointer transition-all duration-100  h-56 hover:scale-103' onClick={() => setEditForm(true)}>

                {/* task details */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl'>{task.title}</h2>
                    <hr />
                    <p className='text-gray-700 line-clamp-4'>{task.description === '' ? 'No Description' : task.description}</p>
                </div>


                {/* btns */}
                <div className='flex gap-3 flex-col  mt-auto '>


                    <div className='flex gap-3 justify-end'>
                        <button className='flex items-center gap-2 bg-green-700 text-white font-bold px-2 py-2 rounded-xl hover:scale-103 cursor-pointer transition-all duration-300 text-xs hover:bg-linear-to-r from-green-700 to-green-500 w-17' onClick={() => onDone(task._id)}>Done <FaRegCheckCircle className='size-4' /> </button>

                        <button className=' flex items-center gap-2 bg-red-700 text-white font-bold px-2 py-2 rounded-xl hover:scale-103 cursor-pointer transition-all duration-300 text-xs hover:bg-linear-to-r from-red-700 to-red-500 w-17' onClick={() => onDelete(task._id)}> Delete <HiXCircle className='size-4' /> </button>

                    </div>
                </div>



            </div>

            {editForm === true && <EditForm task={task} setEditForm={setEditForm} />}
        </>
    )
}

export default TaskBox
