import React from 'react'
import MainHeading from './MainHeading'
import NewTaskForm from './NewTaskForm'

const AddTask = () => {

  return (
    <div className='flex-col justify-center px-4 py-4 sm:px-12 lg:px-24 xl:px-40' >
      <MainHeading title={"Add New Task"} />

      <NewTaskForm />
    </div>
  )
}

export default AddTask
