import Adminheader from 'Components/Adminheader';
import Sidebar from 'Components/Sidebar';
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function MinimunWalletBalance() {


      const sessionDefaultValues = { chat: 10, phone: 20, video: 30 };
      const [sessionValues, setSessionValues] = useState(sessionDefaultValues);
      const [isSessionEditing, setIsSessionEditing] = useState(false);
      const [tempValues, setTempValues] = useState(sessionDefaultValues);



        const sessionHandleEditClick = () => {
          setIsSessionEditing(true);
        };
      
        const sessionHandleCancelClick = () => {
          setTempValues(sessionValues);
          setIsSessionEditing(false);
        };
      
        const sessionHandleSaveClick = () => {
          setSessionValues(tempValues);
          setIsSessionEditing(false);
          toast.success("Changes Saved!"); // Show toast
      
        };


  return (
    <div className='flex h-screen bg-[#F0F0F0]'>
    <Sidebar />
    <div className=" w-full  flex flex-col">
      <Adminheader />
      <div className='p-7  6 overflow-y-auto h-screen scrollbar-none'>
          {/* headings */}
          <div className="headings flex justify-between items-center">
            <div className='left'>
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
                Minimum wallet balance       </div>
              </div>
            </div>
            <Link to="/User&WalletDetails/MinimumWalletBalance" className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit">
              Minimum Wallet Balance  <IoArrowForward className='text-[20px]' />
            </Link>

          </div>
          <div className='flex flex-col py-7 gap-7'>

          
          <div className="bg-white  w-full flex flex-col gap-[40px] rounded-[24px] px-[40px] py-[30px]">
    <h2 className='text-[24px]'>Set minimum wallet balance</h2>
    
    <div className='flex gap-[40px] w-full'>
    
    
            {["chat", "phone", "video"].map((type, index) => (
              <div key={index} className="w-1/3 flex flex-col gap-[8px]">
                <span>{type.charAt(0).toUpperCase() + type.slice(1)} {type!=="chat"?'call':""}</span>
                <div className="px-[24px] text-[18px] rounded-[12px] py-[12px] border-[1px] border-[#808080] flex justify-between items-center">
                  <input
                    className="outline-none bg-transparent w-full"
                    type="number"
                    value={tempValues[type]}
                    disabled={!isSessionEditing}
                    onChange={(e) =>
                      setTempValues({ ...tempValues, [type]: e.target.value })
                    }
                  />
                  <span>₹</span>
                </div>
              </div>
            ))}
    </div>
    
        {/* Edit button */}
    
          <div className="flex gap-4 self-end">
            {isSessionEditing ? (
              <>
                 <button
                  onClick={sessionHandleCancelClick}
                  className="px-[24px] py-[12px] border-[1px]  border-black rounded-[8px] text-black text-[18px]"
                >
                  Cancel
                </button>
                <button
                  onClick={sessionHandleSaveClick}
                  className="px-[24px] py-[12px] bg-[#3A3A3A] rounded-[8px] text-white text-[18px]"
                >
                  Save Changes
                </button>
             
              </>
            ) : (
              <button
                onClick={sessionHandleEditClick}
                className="px-[24px] py-[12px] bg-[#3A3A3A] rounded-[8px] text-white text-[18px]"
              >
                Edit Details
              </button>
            )}
          </div>
          </div>
          <div className='text-[18px]'>Note - The minimum wallet balance cannot be lower then the session charges per minute. </div>
          </div>

          </div>
          </div>
          </div>
  )
}

export default MinimunWalletBalance