import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React from 'react'
import DashboardFile from './Components/DashboardFile'

function Dashboard() {
  return (
    <div>
      <div className='flex h-screen bg-[#F0F0F0]'>
        <Sidebar/>
        <div className="rght w-full auto flex flex-col">
        <Adminheader />
        <DashboardFile/>
        </div>
       
    </div>
    </div>
  )
}

export default Dashboard