import React, { useEffect, useState } from 'react'
import MainHeading from './MainHeading'
import CompletedTaskBox from './CompletedTaskBox'
import toast from 'react-hot-toast'

const CompletedTask = () => {

  const [CompletedTasksData, setCompletedTasks] = useState([])
  
    useEffect(() => {
  
      const controller = new AbortController();
  
      async function getData() {
        try {
          const res = await fetch('http://localhost:4900/api/completedTask', {
            signal: controller.signal
          });
  
          if (!res.ok) throw new Error('Request failed');
  
          let data = await res.json();
  
          console.log(data);
  
          setCompletedTasks(data)
  
        } catch (err) {
          if (err.name !== 'AbortError') console.error(err);
        }
      }
  
      getData();
  
      return () => controller.abort();
  
    }, [])

  async function deleteTask(id) {
    try {
      const res = await fetch(`http://localhost:4900/api/deleteTask/${id}`, {
        'method' : "DELETE"
      })

      if(!res.ok) throw new Error('could not delete')

      toast.success('Task Removed');

      setCompletedTasks((prev)=>prev.filter((t)=>t._id !== id))

    } catch (error) {
      console.log(err);
      toast.error('Request Failed')
    }
  }

  async function markUndone(id) {
    console.log(id)
    try {
      const res = await fetch(`http://localhost:4900/api/undoneTask/${id}`, {
        'method': 'PUT'
      })

      if (!res.ok) {
        toast.error('Request Failed')
        throw new Error("Could not mark as undone");
      }

      console.log(res);
      toast.success('marked as undone')

      setCompletedTasks((prev)=> prev.filter((t)=> t._id !== id))

    } catch (err) {
      console.log(err);
      toast.error('Request Failed')
    }
  }

  return (
    <div className='px-4 py-4 sm:px-12 lg:px-24 xl:px-30 flex flex-col gap-10'>
      < MainHeading title={"Completed Task"}/>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>

        {CompletedTasksData.map((task, index) => {
          return <CompletedTaskBox key={task._id} task={task} onUndo={markUndone} onDelete={deleteTask} />
        })}

      </div>

    </div>
  )
}

export default CompletedTask
