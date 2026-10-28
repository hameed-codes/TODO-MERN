import React, { useState } from 'react'

const NavBar = () => {

    const [siderBarOpen, setSideBar] = useState(false);


    return (
        <div className='flex items-center justify-center py-4 px-4 sm:px-12 lg:px-24 xl:px-40 z-20 top-0 sticky bg-white/50 backdrop-blur-2xl text-gray-700'>

            <img src="" alt="" className=''/>

            <div className={`flex items-center gap-10 ${!siderBarOpen? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10 "} max-sm:fixed max-sm:min-h-screen max-sm:h-screen max-sm:bg-primary max-sm:text-white top-0 bottom-0 right-0 max-sm:flex-col max-sm:pt-25`}>
                
                <a href="#" className='sm:hover:border-b'>Add Task</a>
                <a href="#" className='sm:hover:border-b'>Active Tasks</a>
                <a href="#" className='sm:hover:border-b'>Completed Tasks</a>

                <button className='bg-primary text-white font-bold px-5 py-1 rounded-2xl hover:scale-103 cursor-pointer transition-all delay-75 max-sm:bg-white max-sm:text-primary max-sm:w-30 max-sm:py-2'>GitHub</button>

            </div>

        </div>
    )
}

export default NavBar
