import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useEffect, useState } from 'react'
import DashboardFile from './Components/DashboardFile'

function Dashboard() {
  // State to store user data
  const [user, setUser] = useState(null);

  // Load user data from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the JSON string
    }
  }, []);
  
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