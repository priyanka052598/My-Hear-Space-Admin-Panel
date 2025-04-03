


import axios from 'axios';
import API_ENDPOINTS from 'Configs/Endpoints';
import React, { useEffect, useState } from 'react';
import { FaPhoneSlash } from "react-icons/fa6";


function DeclinedSession({ listner }) {
  const [data, setData] = useState()
  let TableData = [
    {
      number: 1,
      date: "15/12/24",
      type: "Video",
      reason: "Network Issues",
      more: "I am currently facing network issues in my area due to bad weather conditions.",
    },
    {
      number: 2,
      date: "15/12/24",
      type: "Video",
      reason: "Network Issues",
      more: "I am currently facing network issues in my area due to bad weather ck issues in my area due to bad weather conditions.",
    },
    {
      number: 3,
      date: "15/12/24",
      type: "Video",
      reason: "Network Issues",
      more: "I am currently facing network issues in my area due to bad weather ck issues in my area due to bad weather conditions.",
    },
  ];

  const getListenerDeclined = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve and parse user data
      // const token = user?.token; // Extract the token

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(
        `${API_ENDPOINTS.getDeclinedSessions}${listner._id}/rejections`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );
setData(response.data)
      console.log("esponse.data.data.email", response.data);
    } catch (error) {
      console.error("Error fetching listeners:", error);
    }
  };

  useEffect(() => {
      getListenerDeclined();
    }, []);

  return (
    <>
      <div className="px-7 py-4 flex gap-7">
        {/* table */}
        <div className="w-[75%] flex flex-col rounded-[24px] bg-white px-[40px] py-[30px] ">
          {data?.rejectionLists.length > 0 &&
          
          <h2 className="text-[24px] mb-5">Overview</h2>
          }

          <div className=" flex flex-col gap-6">
            {data?.rejectionLists.length > 0 ? (
              data?.rejectionLists?.map((data, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[150px_1fr] gap-0 text-left border border-gray-300"
                >
                  {/* Left Column - Field Names */}
                  <div className="font-600 text-black  border-r border-gray-300">
                    <div className="px-4 py-3 border-b">Sr. No..</div>
                    <div className="px-4 py-3 border-b">Date</div>
                    <div className="px-4 py-3 border-b">Type</div>
                    <div className="px-4 py-3 border-b">Reason</div>
                    <div className="px-4 py-3">Details</div>
                  </div>
                  {/* Right Column - Data */}
                  <div className="text-gray-900">
                    <div className="px-4 py-3 border-b">{data?.number}</div>
                    <div className="px-4 py-3 border-b">
                      {data?.rejectedAt.slice(0, 10)}
                    </div>
                    <div className="px-4 py-3 border-b">
                      {data?.conversationType}
                    </div>
                    <div className="px-4 py-3 border-b">
                      {data?.rejectionReason}
                    </div>
                    <div className="px-4 py-3">{data?.customReason}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center text-3xl">
                No Declined Sessions
              </div>
            )}
          </div>
        </div>
        {/* Declined session */}
        <div className="w-[25%] rounded-[24px] bg-white gap-8 flex flex-col justify-center items-center h-fit px-[30px] py-[30px] ">
          <div className="flex flex-col justify-center items-center ">
            <div className="bg-[#F0F0F0] p-5 w-fit rounded-[12px]">
              <FaPhoneSlash className="text-[50px] " />
            </div>
            <span className="text-[60px] font-600">
              {data?.totalRejections || "0"}
            </span>
            <span className="text-[24px] font-500">Sessions Declined</span>
          </div>
          <button
            className="text-[18px] w-full border-[1px] border-black py-[12px]  rounded-[12px]"
            type="button "
          >
            Deactivated - 0
          </button>
        </div>
      </div>
      {/* Button */}

      <div className="bg-white flex justify-end    fixed bottom-0 w-[82%] border-t-[1px]  py-3 border-[#808080]">
        <button
          className="text-[18px] flex self-end right-0 text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]"
          type="button"
        >
          Deactivate Listener
        </button>
      </div>
    </>
  );
}

export default DeclinedSession;

