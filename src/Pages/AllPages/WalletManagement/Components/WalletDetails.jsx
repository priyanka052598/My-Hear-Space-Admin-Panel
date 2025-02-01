import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { GoClock } from "react-icons/go";
import { IoWallet } from 'react-icons/io5';
import { LuIndianRupee } from "react-icons/lu";



function WalletDetails() {
    const[status,setStatus]=useState()
    let data=[{
        status:'Chat',
        date:"11/12/24",
        time:"20:00",
        amount:"400"

    },
    {
        status:'Chat',
        date:"11/12/24",
        time:"20:00",
        amount:"400"

    },
    {
        status:'Chat',
        date:"11/12/24",
        time:"20:00",
        amount:"400"

    },
    {
        status:'Chat',
        date:"11/12/24",
        time:"20:00",
        amount:"400"

    },
    {
        status:'Chat',
        date:"11/12/24",
        time:"20:00",
        amount:"400"

    },
]
  return (
  <div className='flex h-screen bg-[#F0F0F0]'>
    <Sidebar />
    <div className=" w-full  flex flex-col">
      <Adminheader />
          {/* headings */}
      <div className='p-7  6 overflow-y-auto h-screen scrollbar-none'>
              <h1 className='text-[32px]'>User and Wallet Details</h1>
              <div className='flex gap-2 my-2'>
                <div className='  flex justify-start items-center gap-1'>
                  <div className=" text-[#808080]">Dashboard</div>
                   <IoIosArrowForward className='text-[#808080]' />
                </div>
                <Link to="/User&WalletDetails" className='  flex justify-start items-center gap-1'>
                  <div className=" text-[#808080]">User and Wallet Details</div>
                   <IoIosArrowForward className='text-[#808080]' />
                </Link>
                <div className=" text-[16px]">
                Wallet Details      </div>
            </div>
             {/* Wallet Details */}
             <div className='py-7 flex gap-7' >
            {/* Overview */}
            <div className='w-3/5 p-[40px]  bg-white rounded-[24px]  '>
            <div className='flex mb-6 justify-between items-center'>
                <span className='text-[24px]'>Overview</span>
                <span className='text-[20px]'>50 Transactions</span>
            </div>
            <div className='flex flex-col gap-[24px]'>
                {data.map((item)=>{
                    return <div className='bg-[#F0F0F0] rounded-[12px] flex justify-between items-center  px-[24px] py-[12px]'>
                        <div>
                            <span className='text-[20px]'>{item.status}</span>
                            <div className='text-[16px] flex items-center gap-1'> <GoClock/>{item.time} mins </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[20px] self-end'>{item.amount}</span>
                            <span className='text-[15px] self-end'>{item.date}</span>
                        </div>

                    </div>
                })}

            </div>

            </div>
            {/* Balance/Credited */}
              <div className=' w-2/5 flex  gap-7'>
               <div className="balance w-1/2 h-fit bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
                 
                 <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><IoWallet className='text-[40px]'/></div>
                 <div className='flex flex-col gap-[4px]'>
                 <span className='text-[28px] text-black'>₹250.45</span>
                 <span className='text-[16px] text-[#808080]'>Wallet Balance</span>
                 </div>
           
               </div>
               <div className="balance w-1/2 h-fit bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
                 
                 <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><LuIndianRupee className='text-[40px]'/></div>
                 <div className='flex flex-col gap-[4px]'>
                 <span className='text-[28px] text-black'>₹4,500</span>
                 <span className='text-[16px] text-[#808080]'>Total Credited</span>
                 </div>
           
               </div>
              </div>

            </div>
            </div>
           
            </div>
            </div>
  )
}

export default WalletDetails