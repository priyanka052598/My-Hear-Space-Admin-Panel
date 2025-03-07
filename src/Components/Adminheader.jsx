import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { PiUserBold } from "react-icons/pi";






function Adminheader() {
  const storedUser = localStorage.getItem('user');
  let user=JSON.parse(storedUser);
  return (
    <div className='w-[100%] sticky top-0 h-[70px] border-b-[1px] border-[#808080] bg-[#ffffff]'>
        
    <div className="right w-full flex h-full  justify-end items-center   gap-4 pr-7 ">
        <div className="notfication self-center p-[8px] rounded-[8px] border-[1px] border-[#808080] w-fit">
            <IoNotificationsOutline className='text-[30px]'/>
        </div>
        <div className="profile py-[8px] px-[10px]  gap-3 flex rounded-[8px] border-[1px] border-[#808080] w-fit">
   <div className="user p-1 rounded-[4px] bg-[#808080]"><PiUserBold className='text-white text-[20px]'/> </div> 
   <span className='text-[16px] self-center'>{user?.name || "Admin"}</span>
    {/* <GoPencil className='text-[24px] self-center'/> */}
        </div>
    </div>

    </div>
  )
}

export default Adminheader




