import React, { useState } from 'react'
import NavBar from './components/NavBar'
import AddTask from './components/AddTask'
import ActiveTasks from './components/ActiveTasks'
import { Toaster } from 'react-hot-toast'
import CompletedTask from './components/CompletedTask'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  

  return (
    <div>
      <Toaster/>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Navigate to="/active" replace/>} />
        <Route path='/active' element={<ActiveTasks />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/completed' element={< CompletedTask />} />
      </Routes>

    </div>
  )
}

export default App
