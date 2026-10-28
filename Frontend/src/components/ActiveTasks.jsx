import React, { useEffect, useState } from 'react'
import MainHeading from './MainHeading'

const ActiveTasks = () => {

  // const [activeTasksData, setActiveTasks] = useState([])

  // useEffect(() => {
  //   getData();
  // }, [])

  // async function getData() {
  //   const data = await fetch('http://localhost:4900/api/activeTask');
  //   data = await data.json();

  //   console.log(data);
  //   setActiveTasks(data)
  // }

  return (
    <div className='px-4 py-4 sm:px-12 lg:px-24 xl:px-40'>
      <MainHeading title={"Active Tasks"} />

      

    </div>
  )
}

export default ActiveTasks

