import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { GoClock } from "react-icons/go";
import { IoWallet } from 'react-icons/io5';
import { LuIndianRupee } from "react-icons/lu";
import API_ENDPOINTS from 'Configs/Endpoints'
import axios from 'axios'



function WalletDetails() {
    const location = useLocation()
    const {state} = location
    const[status,setStatus]=useState()

    const [transactResponse, setTransactResponse] = useState()


     const getTransactions = async () => {
       try {
         const token = localStorage.getItem("authToken"); // Retrieve and parse user data
         // const token = user?.token; // Extract the token

         if (!token) {
           console.error("No token found");
           return;
         }

         const response = await axios.get(
           `${API_ENDPOINTS.getUsersTransactions}${state?.phone}`,
           {
             headers: {
               Authorization: `Bearer ${token}`, // Include the token in the request
             },
           }
         );
          setTransactResponse(response.data || []);
         response.data.data.length > 0 && console.log(response.data.data);
       } catch (error) {
         console.error("Error fetching listeners:", error);
       }
     };

     useEffect(() => {
       getTransactions();
     }, []);

    console.log("state", state);
 
  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      <Sidebar />
      <div className=" w-full  flex flex-col">
        <Adminheader />
        {/* headings */}
        <div className="p-7  6 overflow-y-auto h-screen scrollbar-none">
          <h1 className="text-[32px]">User and Wallet Details</h1>
          <div className="flex gap-2 my-2">
            <div className="  flex justify-start items-center gap-1">
              <div className=" text-[#808080]">Dashboard</div>
              <IoIosArrowForward className="text-[#808080]" />
            </div>
            <Link
              to="/user-wallet-details"
              className="  flex justify-start items-center gap-1"
            >
              <div className=" text-[#808080]">User and Wallet Details</div>
              <IoIosArrowForward className="text-[#808080]" />
            </Link>
            <div className=" text-[16px]">Wallet Details </div>
          </div>
          {/* Wallet Details */}
          <div className="py-7 flex gap-7">
            {/* Overview */}
            <div className="w-3/5 p-[40px]  bg-white rounded-[24px]  ">
              <div className="flex mb-6 justify-between items-center">
                <span className="text-[24px]">Overview</span>
                <span className="text-[20px]">
                  {transactResponse?.transactions.length}
                </span>
              </div>
              <div className="flex flex-col gap-[24px]">
                {transactResponse?.transactions.map((item) => {
                  return (
                    <div className="bg-[#F0F0F0] rounded-[12px] flex justify-between items-center  px-[24px] py-[12px]">
                      <div>
                        <span className="text-[20px]">{item.description}</span>
                        {/* <div className="text-[16px] flex items-center gap-1">
                          {" "}
                          <GoClock />
                          {item.time} mins{" "}
                        </div> */}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[20px] self-end">
                          {item.amount}
                        </span>
                        <span className="text-[15px] self-end">
                          {item.timestamp.slice(0, 10)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Balance/Credited */}
            <div className=" w-2/5 flex  gap-7">
              <div className="balance w-1/2 h-fit bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
                <div className="p-4 bg-[#F0F0F0]  rounded-[12px]">
                  <IoWallet className="text-[40px]" />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[28px] text-black">
                    ₹{transactResponse?.walletBalance}
                  </span>
                  <span className="text-[16px] text-[#808080]">
                    Wallet Balance
                  </span>
                </div>
              </div>
              <div className="balance w-1/2 h-fit bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
                <div className="p-4 bg-[#F0F0F0]  rounded-[12px]">
                  <LuIndianRupee className="text-[40px]" />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[28px] text-black">
                    ₹{transactResponse?.totalCredited}
                  </span>
                  <span className="text-[16px] text-[#808080]">
                    Total Credited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletDetails