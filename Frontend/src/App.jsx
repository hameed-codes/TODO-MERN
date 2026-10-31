import React, { useState } from 'react'
import NavBar from './components/NavBar'
import AddTask from './components/AddTask'
import ActiveTasks from './components/ActiveTasks'
import { Toaster } from 'react-hot-toast'
import CompletedTask from './components/CompletedTask'

const App = () => {

  

  return (
    <div>
      <Toaster/>
      <NavBar/>
      <AddTask />
      <ActiveTasks />
      <CompletedTask />

    </div>
  )
}

export default App
