import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import toast from 'react-hot-toast';

const EditForm = ({task, setEditForm}) => {

    const [taskTitle, setTaskTitle] = useState(task.title);
    const [taskDescrition, setTaskDescription] = useState(task.description)

    async function handleSubmit(e) {

        // e.preventDefault();

        console.log('function is runnig')

        if(taskTitle === task.title && taskDescrition === task.description) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:4900/api/updateTask/${task._id}`, {
                'method' : 'PUT',
                'headers' : {'Content-Type' : 'application/json'},
                'body' : JSON.stringify({title: taskTitle, description: taskDescrition})
            })

            if(!res.ok) throw new Error('Request Failed')

            setEditForm(false)
            toast.success('Updated Successfully')

        } catch (err) {
           console.log(err)
            toast.error('Request Failed')
        }  
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center z-20 px-4 sm:px-20 lg:px-30 xl:px-50 max-h-screen backdrop-blur-sm bg-transparent'>

            <form onSubmit={handleSubmit} className='w-full'>

                <div  className='bg-blue-200 relative py-10 rounded-2xl px-10 max-sm:max-h-screen' >

                    <div className='top-4 right-4 absolute cursor-pointer' onClick={()=>setEditForm(false)}>  <IoClose className='size-7 hover:scale-110' />  </div>

                    <div className='flex flex-col gap-3 my-8  '>
                        <p className='text-center' >{task.createdAt.substring(0,10)}</p>
                        <input type="text" name='taskTitle' value={taskTitle} onChange={(e)=> setTaskTitle(e.target.value)} className='text-2xl font-extrabold outline-none' />
                        <hr className='text-blue-100'/>
                        <textarea name="taskDescription" id="" value={taskDescrition} onChange={(e)=>setTaskDescription(e.target.value)} className='h-[50vh] overflow-y-auto wrap-break-word text-justify max-sm:max-h-[50vh] scrollbar-none text-gray-700 outline-none resize-none'></textarea>

                    </div>

                    <button className={`flex items-center gap-2 bg-yellow-500 text-white font-bold px-2 py-2 rounded-xl hover:scale-103 cursor-pointer transition-all duration-300 text-xs hover:bg-linear-to-r from-yellow-500 to-yellow-300 absolute bottom-4 right-4 ${taskTitle === task.title && taskDescrition === task.description ? 'hidden' : ''}`}> Save </button>

                </div>
            </form>

        </div>
    )
}

export default EditForm
