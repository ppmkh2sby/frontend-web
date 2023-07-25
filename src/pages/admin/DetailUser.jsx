import React from 'react'
import Sidebar from '../../components/Sidebar'

function DetailUser() {
  return (
    <div className='flex'>
        <div className="fixed top-0 left-0 z-10 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-56 px-5 py-5 w-full">
        <p className='text-2xl font-bold'>Hello User!</p>
      </div>
    </div>
  )
}

export default DetailUser
