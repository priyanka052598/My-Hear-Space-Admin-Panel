import images from 'assets'
import React from 'react'
import { FiHome } from "react-icons/fi";
import { TbUserHexagon } from "react-icons/tb";
import { LuIndianRupee } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { LuFilePen } from "react-icons/lu";
import { FiPhoneMissed } from "react-icons/fi";
import { RiImageEditFill } from "react-icons/ri";

import { TbLogout2 } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';



function Sidebar() {
  const navigation=useNavigate()
  const location = useLocation()
  console.log(location.pathname)

   const isListenerManagementActive= location.pathname==="/ListenerManagement" || location.pathname=== "/ListenerManagement/AddNewListener" || location.pathname==="/ListenerManagement/CreatedListener"
   console.log(isListenerManagementActive)
   const isDashboardActive=location.pathname==="/Dashboard"
   const isPaymentManagementActive=location.pathname==="/PaymentManagement" || location.pathname=== "PaymentManagement/SuccessfulPayment" || location.pathname=== "/PaymentManagement/PendingPayment"
   const isRateManagement=location.pathname==="/RateManagement"
   const isWalletManagement=location.pathname==="/User&WalletDetails"||location.pathname==="/User&WalletDetails/MinimumWalletBalance" || location.pathname==="/User&WalletDetails/WalletDetails"
   const isUserFeedback=location.pathname==="/UserFeedback"
   const isBlogManagement=location.pathname==="/BlogManagement"||location.pathname==="/BlogManagement/AddNewBlog"||location.pathname=== "/BlogManagement/EditBlog"
   const isSessionRejected=location.pathname==="/SessionRejected"
   const isBannerManagement=location.pathname==="/BannerManagement"

  return (
    <div className='w-[23%] pb-16   bg-[#151515] h-screen scrollbar-none overflow-y-auto'>
      <div className="logo">
        <img className='w-[80px] mx-auto py-[30px] self-center' src={images.hearspacelogo} alt="" srcset="" />
      </div>
      <div className="allpagesname  ">
        <Link to="/Dashboard" className={`dahsboard ${isDashboardActive? "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"} pl-[20px]  py-[16px]   gap-[14px] flex justify-start items-center `}>
          <FiHome className='text-[24px]'/> <span className='text-[16px]'>Dashboard</span>
</Link>
<Link to="/ListenerManagement" className={` ${isListenerManagementActive? "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"} curs  pl-[20px] py-[16px] gap-[14px] flex justify-start items-center `}>
          <TbUserHexagon className='text-[24px]'/> <span className='text-[16px]'>Listener Management</span>
</Link>
<Link to="/PaymentManagement" className={`${isPaymentManagementActive?  "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"}  pl-[20px] py-[16px]   gap-[14px] flex justify-start items-center `}>
          <LuIndianRupee className='text-[24px]'/> <span className='text-[16px]'>Payment Management</span>
</Link>
<Link to="/RateManagement" className={` pl-[20px] py-[16px]  ${isRateManagement?  "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"} gap-[14px] flex justify-start items-center `}>
          <TbCirclePercentage className='text-[24px]'/> <span className='text-[16px]'>Rate Management</span>
</Link>
<Link to="/User&WalletDetails" className={` pl-[20px] py-[16px]  ${isWalletManagement?  "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"} text-[#808080] gap-[14px] flex justify-start items-center `}>
          <FiUsers className='text-[24px]'/> <span className='text-[16px]'>User & Wallet Details</span>
</Link>
<div className=" pl-[20px] py-[16px]  text-[#808080] gap-[14px] flex justify-start items-center ">
          <FiFileText className='text-[24px]'/> <span className='text-[16px]'>Report Generation</span>
</div>
<Link to="/UserFeedback" className={` pl-[20px] py-[16px] ${isUserFeedback ?"bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]" } text-[#808080] gap-[14px] flex justify-start items-center `}>
          <FaRegStar className='text-[24px]'/> <span className='text-[16px]'>User Feedbacks</span>
</Link>
<Link to="/BlogManagement" className={` pl-[20px] py-[16px] ${isBlogManagement ? "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"}  text-[#808080] gap-[14px] flex justify-start items-center `}>
          <LuFilePen className='text-[24px]'/> <span className='text-[16px]'>Blog Management</span>
</Link>
<Link to="/SessionRejected" className={` pl-[20px] py-[16px] ${isSessionRejected?"bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]" }  text-[#808080] gap-[14px] flex justify-start items-center `}>
          <FiPhoneMissed className='text-[24px]'/> <span className='text-[16px]'>Sessions Rejected</span>
</Link>
<Link to="/BannerManagement" className={` pl-[20px] py-[16px] ${isBannerManagement? "bg-[#3A3A3A] text-white border-l-[3px] border-white": "text-[#808080]"}  text-[#808080] gap-[14px] flex justify-start items-center `}>
          <RiImageEditFill className='text-[24px]'/> <span className='text-[16px]'>Banner Management</span>
</Link>
      </div>
      <div className=" pl-[20px] pt-16 py-[16px]  text-[#808080] gap-[14px] flex justify-start items-center ">
          <TbLogout2 className='text-[24px]'/> <span className='text-[16px]'>Logout</span>
</div>
    </div>
  )
}

export default Sidebar