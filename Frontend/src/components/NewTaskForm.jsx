import React from 'react'

const NewTaskForm = () => {
    return (
        <form action="" className='flex-col items-center justify-center gap-20 w-full'>

            {/* title */}
            <div className='flex-col py-10 gap-20 items-center justify-center'>
                <h3 className='text-gray-700'>Title</h3>
                <input type="text" name='newTaskName' placeholder='Enter the title' className='border-gray-400 rounded-xl outline-none px-3' />
            </div>


            {/* description */}
            <div>
                <h3>Description</h3>
                <textarea name="newTaskDescription" id="" placeholder='Describe your task'></textarea>
            </div>


            <button className='bg-primary text-white font-bold px-5 py-1 rounded-2xl hover:scale-103 cursor-pointer transition-all delay-75 '>Add</button>

        </form>
    )
}

export default NewTaskForm
