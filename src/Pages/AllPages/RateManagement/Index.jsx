import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



function RateManagement() {
  const sessionDefaultValues = { chat: 10, phone: 20, video: 30 };
  const [sessionValues, setSessionValues] = useState(sessionDefaultValues);
  const [isSessionEditing, setIsSessionEditing] = useState(false);
  const [tempValues, setTempValues] = useState(sessionDefaultValues);


  const commissionDefaultValues ={chat:5,phone:7,video:10};
  const[commissionValue,setCommissionValue]=useState(commissionDefaultValues);
  const[isCommissionEditing,setIsCommissionEditing]=useState(false);
  const[commissionTempValue,setCommissionTempValue]=useState(commissionDefaultValues);




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
  
  const commissionHandleEditClick=()=>{
    setIsCommissionEditing(true);
  };

  const commissionHandleSaveClick=()=>{
    setIsCommissionEditing(false)
setSessionValues(commissionTempValue) 
toast.success("Changes Saved!"); // Show toast
};

  const commissionHandleCancelClick=()=>{
    setCommissionValue(commissionTempValue)
    setIsCommissionEditing(false)



  }


  
  
  
  return (
    <div> <div className='flex h-screen bg-[#F0F0F0]'>
    <Sidebar/>
<div className=" w-full  flex flex-col">
    <Adminheader />
<div className='p-7   overflow-y-auto h-screen scrollbar-none'>
  <div className='flex justify-between items-center'>

  
  {/* headings */}
  <div className="headings ">
   
      <h1 className='text-[32px]'>Rate Management</h1>
      <div className='flex gap-2 my-2'>
        <div className=' dashbaord flex justify-start items-center gap-1'>
          <Link to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
        </div>
        <div className="listener text-[16px]">
        Rate Management
        </div>
      </div>
   

  </div>
  {/* Changes Saved! */}
  {/* {setSessionValues && 
  <div className='flex justify-center items-center py-[12px] px-[24px] text-[24px] font-normal bg-white rounded-[12px] gap-3 '> 
  <FaCheckCircle className='text-[30px] text-[#06C270]'/>Changes Saved!</div>} */}
  </div>
  <div className='flex py-7 gap-7 flex-col '>
{/* Session Charges per minute */}

<div className="bg-white w-full flex flex-col gap-[40px] rounded-[24px] px-[40px] py-[30px]">
<h2 className='text-[24px]'>Session Charges per minute</h2>

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
              <span>₹/min</span>
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

 
  {/* Commission Percentage */}

  <div className="bg-white w-full flex flex-col gap-[40px] rounded-[24px] px-[40px] py-[30px]">
<h2 className='text-[24px]'>Commission Percentage</h2>

<div className='flex gap-[40px] w-full'>


        {["chat", "phone", "video"].map((type, index) => (
          <div key={index} className="w-1/3 flex flex-col gap-[8px]">
            <span>{type.charAt(0).toUpperCase() + type.slice(1)} {type!=="chat"?'call':""}</span>
            <div className="px-[24px] text-[18px] rounded-[12px] py-[12px] border-[1px] border-[#808080] flex justify-between items-center">
              <input
                className="outline-none bg-transparent w-full"
                type="number"
                value={commissionTempValue[type]}
                disabled={!isCommissionEditing}
                onChange={(e) =>
                  setCommissionTempValue({ ...commissionTempValue, [type]: e.target.value })
                }
              />
              <span>%</span>
            </div>
          </div>
        ))}
</div>

    {/* Edit button */}

      <div className="flex gap-4 self-end">
        {isCommissionEditing ? (
          <>
             <button
              onClick={commissionHandleCancelClick}
              className="px-[24px] py-[12px] border-[1px]  border-black rounded-[8px] text-black text-[18px]"
            >
              Cancel
            </button>
            <button
              onClick={commissionHandleSaveClick}
              className="px-[24px] py-[12px] bg-[#3A3A3A] rounded-[8px] text-white text-[18px]"
            >
              Save Changes
            </button>
         
          </>
        ) : (
          <button
            onClick={commissionHandleEditClick}
            className="px-[24px] py-[12px] bg-[#3A3A3A] rounded-[8px] text-white text-[18px]"
          >
            Edit Details
          </button>
        )}
      </div>
      </div>
  <div className='text-[18px]'>Note - The new percentage won’t be applicable on the current pending payments </div>

  </div>
  </div>

  </div>
  </div>
  </div>
  )
}

export default RateManagement