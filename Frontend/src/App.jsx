import React from 'react'
import NavBar from './components/NavBar'
import AddTask from './components/AddTask'
import ActiveTasks from './components/ActiveTasks'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster/>
      <NavBar/>
      <AddTask/>
      {/* <ActiveTasks /> */}
    </div>
  )
}

export default App
