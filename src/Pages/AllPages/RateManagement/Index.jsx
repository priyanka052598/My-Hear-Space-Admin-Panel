import axios from 'axios';
import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { N } from '../../../../dist/assets/react-MW7fQFJQ';



function RateManagement() {
  const sessionDefaultValues = { chat: 10, phone: 20, video: 30 };
  const [sessionValues, setSessionValues] = useState({});
  const [isSessionEditing, setIsSessionEditing] = useState(false);
  const [tempValues, setTempValues] = useState({});


  const commissionDefaultValues ={chat:5,phone:7,video:10};
  const[commissionValue,setCommissionValue]=useState({});
  const[isCommissionEditing,setIsCommissionEditing]=useState(false);
  const[commissionTempValue,setCommissionTempValue]=useState({});


  const[settingData,setSettingData]=useState([]);




  const sessionHandleEditClick = () => {
    setIsSessionEditing(true);
  };

  const sessionHandleCancelClick = () => {
    setTempValues(sessionValues);
    setIsSessionEditing(false);
  };

  const sessionHandleSaveClick = () => {
    setTempValues(tempValues);
    updateSessionCharges()
    setIsSessionEditing(false);
    toast.success("Changes Saved!"); // Show toast

  };
  
  const commissionHandleEditClick=()=>{
    setIsCommissionEditing(true);
  };

  const commissionHandleSaveClick=()=>{
    setIsCommissionEditing(false)
    updateCommissionCharges()
setCommissionTempValue(commissionTempValue) 
toast.success("Changes Saved!"); // Show toast
};

  const commissionHandleCancelClick=()=>{
    setCommissionValue(commissionTempValue)
    setIsCommissionEditing(false)
}

const serverUrl = import.meta.env.VITE_SERVER_URL;


const getSetting = async () => {
  try {
    const token = localStorage.getItem("authToken"); // Retrieve and parse user data
    // const token = user?.token; // Extract the token
    console.log(token,"token")

    if (!token) {
      console.error("No token found");
      return;
    }

    const response = await axios.get(`${serverUrl}admins/settings`, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the request
      }
    });
console.log("response",response.data)
setTempValues(response.data.sessionCharges)
setCommissionTempValue(response.data.commissionPercentage)
    setSettingData(response.data); // Ensure you're accessing response.data
    response.data.length > 0 && console.log(response.data);
  } catch (error) {
    console.error("Error fetching listeners:", error);
  }
};
console.log("sessionValues",sessionValues)
const updateSessionCharges = async () => {
  try {
    const token = localStorage.getItem("authToken"); // Retrieve and parse user data
    // const token = user?.token; // Extract the token
    console.log(token,"token")

    if (!token) {
      console.error("No token found");
      return;
    }

    const response = await axios.put(`${serverUrl}admins/settings/session-charges`,   {
     
      "chat": Number(tempValues.chat),
      "phoneCall": Number(tempValues.phoneCall),
      "videoCall": Number(tempValues.videoCall)
    
    },{
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the request
      },
      
    });
console.log("response",response.data)
setTempValues(response.settings.sessionCharges)
setCommissionTempValue(response.settings.commissionPercentage)
    setSettingData(response.settings); // Ensure you're accessing response.data
    response.data.length > 0 && console.log(response.data);
  } catch (error) {
    console.error("Error fetching listeners:", error);
  }
};

const updateCommissionCharges = async () => {
  try {
    const token = localStorage.getItem("authToken"); // Retrieve and parse user data
    // const token = user?.token; // Extract the token
    console.log(token,"token")

    if (!token) {
      console.error("No token found");
      return;
    }

    const response = await axios.put(`${serverUrl}admins/settings/commission-percentage`,   {
     
      "chat": Number(commissionTempValue.chat),
      "phoneCall": Number(commissionTempValue.phoneCall),
      "videoCall": Number(commissionTempValue.videoCall)
    
    },{
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the request
      },
      
    });
console.log("response",response.data)
setTempValues(response.settings.sessionCharges)
setCommissionTempValue(response.settings.commissionPercentage)
    setSettingData(response.settings); // Ensure you're accessing response.data
    response.data.length > 0 && console.log(response.data);
  } catch (error) {
    console.error("Error fetching listeners:", error);
  }
};

useEffect(() => {
  getSetting();
}, []);


  
  
  
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


        {["chat", "phoneCall", "videoCall"].map((type, index) => (
          <div key={index} className="w-1/3 flex flex-col gap-[8px]">
            <span>  {type === "chat" ? "Chat" : type === "phoneCall" ? "Phone Call" : "Video Call"}</span>
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


        {["chat", "phoneCall", "videoCall"].map((type, index) => (
          <div key={index} className="w-1/3 flex flex-col gap-[8px]">
            <span>  {type === "chat" ? "Chat" : type === "phoneCall" ? "Phone Call" : "Video Call"}</span>
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