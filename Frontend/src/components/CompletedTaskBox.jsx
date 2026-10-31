import React from 'react'
import { HiXCircle } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";

const CompletedTaskBox = ({task, onUndo, onDelete}) => {

    return (
            <div className='flex flex-col p-3 border border-gray-300 rounded-xl text-gray-900 gap-3 shadow-xl relative transition-all duration-100  h-56 hover:bg-red-100 cursor-not-allowed'>

                {/* task details */}
                <div className='flex flex-col gap-2 line-through'>
                    <h2 className='text-xl'>{task.title}</h2>
                    <hr />
                    <p className='text-gray-700 line-clamp-4'>{task.description === '' ? 'No Description' : task.description}</p>
                </div>


                {/* btns */}
                <div className='flex gap-3 flex-col  mt-auto '>


                    <div className='flex gap-3 justify-end'>
                        <button className='flex items-center gap-2 bg-green-700 text-white font-bold px-2 py-2 rounded-xl hover:scale-103 cursor-pointer transition-all duration-300 text-xs hover:bg-linear-to-r from-green-700 to-green-500 w-17' onClick={() => onUndo(task._id)} >Undone </button>

                        <button className=' flex items-center gap-2 bg-red-700 text-white font-bold px-2 py-2 rounded-xl hover:scale-103 cursor-pointer transition-all duration-300 text-xs hover:bg-linear-to-r from-red-700 to-red-500 w-17' onClick={() => onDelete(task._id)}> Delete <HiXCircle className='size-4' /> </button>

                    </div>
                </div>



            </div>
    )
}

export default CompletedTaskBox
