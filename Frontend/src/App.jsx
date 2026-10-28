import React from 'react'
import NavBar from './components/navBar'
import AddTask from './components/AddTask'
import ActiveTasks from './components/ActiveTasks'

const App = () => {
  return (
    <div>
      <NavBar/>
      {/* <AddTask/> */}
      <ActiveTasks />
    </div>
  )
}

export default App
