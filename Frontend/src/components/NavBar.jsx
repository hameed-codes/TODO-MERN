import React, { useState } from 'react'
import assets from '../assets/assets';
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [siderBarOpen, setSideBar] = useState(false);

    const currentTab = ({isActive}) => `sm:hover:border-b ${isActive? 'text-primary font-bold border-b' : ''}`
    
    return (
        <div className='flex items-center justify-between py-4 px-4 sm:px-12 lg:px-24 xl:px-40 z-20 top-0 sticky bg-white/50 backdrop-blur-lg text-gray-700'>

            <div className='flex items-center gap-2 '>
                <img src={assets.logo} alt="logo" className='w-10'/>
                <h1 className='logoFont text-xl font-bold'>ToDo</h1>
            </div>

            <div className={`flex items-center gap-10 ${!siderBarOpen? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10 "} max-sm:fixed max-sm:min-h-screen max-sm:h-screen max-sm:bg-primary max-sm:text-white top-0 bottom-0 right-0 max-sm:flex-col max-sm:items-start max-sm:pt-25 transition-all duration-300`}>
                
                <img src={assets.close_icon} alt="" onClick={()=>setSideBar(false)} className='size-8 sm:hidden top-4 right-4 absolute' />


                <NavLink to="/add" className={currentTab} >Add Task</NavLink>
                <NavLink to="/active" className={currentTab} >Active Tasks</NavLink>
                <NavLink to="/completed" className={currentTab}>Completed Tasks</NavLink>

                <a href="https://github.com/hameed-codes/TODO-MERN" target='_blank'>
                    <button className='flex items-center gap-2 bg-primary text-white font-bold px-5 py-1 rounded-2xl m-1 hover:scale-103 cursor-pointer max-sm:bg-white max-sm:text-primary max-sm:w-30 max-sm:py-2 transition-all duration-300 text-lg hover:bg-linear-to-r from-primary to-blue-500 '>GitHub <FaGithub/> </button>
                </a>

            </div>

            <img src={assets.menu_icon} alt="" onClick={() => setSideBar(true)} className='size-9 sm:hidden top-4 right-4' />

        </div>
    )
}

export default NavBar
