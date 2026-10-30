import React from 'react'
import { IoClose } from "react-icons/io5";
import assets from '../assets/assets';

const EditForm = ({task, setEditForm}) => {

    async function handleSubmit(_id) {
        
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center z-20 px-4 sm:px-20 lg:px-30 xl:px-50 max-h-screen backdrop-blur-sm bg-transparent'>

            <form onSubmit={handleSubmit}>

                <div  className='bg-blue-200 relative py-10 rounded-2xl px-10 max-sm:max-h-screen' >

                    <div className='top-4 right-4 absolute cursor-pointer' onClick={()=>setEditForm(false)}>  <IoClose className='size-7 hover:scale-110' />  </div>

                    <div className='flex flex-col gap-7 my-8'>
                        <p>{task.createdAt}</p>
                        <h1 className='text-2xl font-extrabold'  >{task.title}</h1>
                        <p className='h-[50vh] overflow-y-auto wrap-break-word text-justify max-sm:max-h-[50vh] scrollbar-none text-gray-700' >{task.description}</p>

                    </div>

                    <button className=' flex items-center gap-2 bg-yellow-500 text-white font-bold px-2 py-2 rounded-xl hover:scale-103 cursor-pointer transition-all duration-300 text-xs hover:bg-linear-to-r from-yellow-500 to-yellow-300 absolute bottom-4 right-4'> Save </button>

                </div>
            </form>

        </div>
    )
}

export default EditForm
