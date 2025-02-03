import React from 'react'
import { IoWallet } from 'react-icons/io5'
import { FaPhoneSlash } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { IoBan } from "react-icons/io5";
import { GoClock } from "react-icons/go";







function SessionDetails() {
  let data=[
    {
    amount:"250",
    date:"Today",
    type:"Recieved",
    status:"20:00"
  },
    {
    amount:"0",
    date:"Today",
    type:"Missed",
    status:"Missed"
  },
    {
    amount:"0",
    date:"Today",
    type:"Declined",
    status:"Declined"
  },
    {
    amount:"250",
    date:"Today",
    type:"Dialed",
    status:"20:00"
  },
    {
    amount:"0",
    date:"Today",
    type:"Dialed",
    status:"Declined by client"
  },
    {
    amount:"0",
    date:"Today",
    type:"Dialed",
    status:"Client has low balance"
  },
]
  return (
    <div className='px-7 mt-8 flex gap-7'>
<div className=' w-[60%] rounded-[24px] mb-20 pb-8  bg-white  flex flex-col'>
      <div className='   flex justify-between items-center  px-[40px] py-[30px] '>
        <h2 className="text-[24px]   "> Overview</h2>
        <div className="right gap-3 flex  items-center">
        <span className='text-[16px]'>Filter</span>
        <div className=' py-2 px-3 bg-white rounded-[8px] border-[1px] border-[#808080]'>
        
            <select className='pr-12 border-white' name="" id=""> 
              {
                ["Till Today", "Update", "Created ", "Pending", "Submitted"].map((item,) => {
                  return <option>{item}</option>
                })
              }

            </select>
          </div>
        </div>
    </div>
    {/* Phone call data */}
    <div className='  overflow-y-auto h-[500px] flex flex-col gap-5  px-[40px] pb-[30px]'>
{data.map((item)=>{
  return <div className='bg-[#F0F0F0] rounded-[12px] flex justify-between w-full px-[24px] py-[16px]'>
<div className='flex items-center gap-3'>
<div className='bg-[#D9D9D9] p-2 w-fit rounded-full'>
  { (item.type === "Recieved" || item.type === "Missed") && (
    <FiArrowDownRight className={`text-[20px] ${item.type === "Missed" ? "text-[#FF5D5D]" : "text-black"}`} />
  )}
  { item.type === "Dialed" && <FiArrowUpRight className='text-[20px]' />}
  { item.type === "Declined" && <IoBan className='text-[20px] text-[#FF5D5D]' />}
</div>  <div>
    <h2 className={`${item.type=="Missed"||item.type=="Declined" ?"text-[#FF5D5D]":"text-black"}`}>Phone Call </h2>
    <div className={`${item.type=="Missed"||item.type=="Declined" ?"text-[#FF5D5D]":"text-black"} flex items-center gap-1`}> { item.status.startsWith("2") &&
      <GoClock/>
      
      
      }{item.status}</div>

  </div>
</div>
<div className='flex flex-col'>
  <span className='text-[20px] self-end font-500'>₹{item.amount}</span>
  <span className='text-[15px] font-400'>{item.date}</span>
</div>
  </div>
})}
    </div>
    </div>
    <div className='w-[40%]'>
        {/* Balance/Credited */}
         <div className=' flex flex-wrap w-full  gap-5'>
          <div className="balance  w-[45%] bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
            
            <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><HiUsers className='text-[40px]'/></div>
            <div className='flex flex-col gap-[4px]'>
            <span className='text-[28px] text-black text-center'>250</span>
            <span className='text-[16px] text-[#808080]'>Total Sessions</span>
            </div>
      
          </div>
          <div className="balance  w-[45%] bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
            
            <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><IoWallet className='text-[40px]'/></div>
            <div className='flex flex-col gap-[4px]'>
            <span className='text-[28px] text-black text-center'>₹250.45</span>
            <span className='text-[16px] text-[#808080]'>Session Missed</span>
            </div>
      
          </div>
          <div className="balance  w-[45%] bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
            
            <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><FaPhoneSlash className='text-[40px]'/></div>
            <div className='flex flex-col gap-[4px]'>
            <span className='text-[28px] text-black text-center'>₹250.45</span>
            <span className='text-[16px] text-[#808080]'>Sessions Declined </span>
            </div>
      
          </div>
         </div>
      

    </div>
    </div>
  )
}

export default SessionDetails