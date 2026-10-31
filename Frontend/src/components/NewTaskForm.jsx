import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NewTaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (title.trim() === '') {
            console.log('title is empty')
            toast.error("Title can not be empty");
            return;
        }

        try {

            const res = await fetch('http://localhost:4900/api/addTask', {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON.stringify({ title, description })
            })

            if (!res.ok) throw new Error('Request Failed')

            setDescription('')
            setTitle('')
            toast.success('Task Added')
        } catch (error) {
            console.error(error)
            toast.error('could not add task')
        }

    }

    return (

        <form onSubmit={handleSubmit} className=' flex flex-col items-center max-sm:w-full gap-5 max-sm:px-5 px-10 max-sm:mt-10 xl:px-50'>

            {/* title */}
            <div className='flex flex-col gap-1 w-full'>
                <h3 className='text-gray-700 text-lg'>Title</h3>
                <input type="text" name='newTaskName' placeholder='Enter the title' onChange={(e) => setTitle(e.target.value)} value={title} className='border-gray-400 border rounded-lg outline-none px-3 h-10' />
            </div>


            {/* description */}
            <div className='flex flex-col gap-1 w-full'>
                <h3 className='text-gray-700 text-lg'>Description</h3>
                <textarea name="newTaskDescription" id="" placeholder='Describe your task' onChange={(e) => setDescription(e.target.value)} value={description} className='border-gray-400 border rounded-lg outline-none px-3 py-2 h-40 max-sm:h-60 resize-none'></textarea>
            </div>


            <button className='bg-primary text-white font-bold px-10 py-2 rounded-2xl hover:scale-103 cursor-pointer transition-all duration-300 text-lg hover:bg-linear-to-r from-primary to-blue-500'>Add</button>

        </form>
    )
}

export default NewTaskForm
