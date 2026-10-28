import React from 'react'

const MainHeading = ({title}) => {
  return (
    <div className='flex-col items-center my-10 text-center text-gray-700' >
      <h1 className='text-5xl font-extrabold'>{title}</h1>
    </div>
  )
}

export default MainHeading
