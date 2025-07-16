


import axios from 'axios';
import API_ENDPOINTS from 'Configs/Endpoints';
import React, { useEffect, useState } from 'react';
import { FaPhoneSlash } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5';


function DeclinedSession({ listner }) {
  const [data, setData] = useState()
  const [showModal, setShowModal] = useState(false); // Modal state
  const [banPeriod, setBanPeriod] = useState("7 Days"); // Default selected period
  const [message, setMessage] = useState("");


  
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
      console.log("response.data.data.email", response.data);
    } catch (error) {
      console.error("Error fetching listeners:", error);
    }
  };

  useEffect(() => {
      getListenerDeclined();
    }, []);


    const handleBan = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve and parse user data
        // const token = user?.token; // Extract the token

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.post(
          `${API_ENDPOINTS.banListener}${listner._id}`,
          {
            reason: "Rejected too many calls",
            banDuration: banPeriod,
            message: message,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request
            },
          }
        );
       
        console.log("esponse.data.data.email", response.data);
      } catch (error) {
        console.error("Error fetching listeners:", error);
      }
      setShowModal(false);
    };

  return (
    <>
      <div className="px-7 py-4 flex gap-7">
        {/* table */}
        <div className="w-[75%] flex flex-col rounded-[24px] bg-white px-[40px] py-[30px] ">
          {data?.rejectionLists.length > 0 && (
            <h2 className="text-[24px] mb-5">Overview</h2>
          )}

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
          onClick={() => setShowModal(true)}
        >
          Deactivate Listener
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-[400px] p-6 relative">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setShowModal(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-[18px] font-semibold mb-1">Ban Period</h2>

            {/* Radio Buttons */}
            <div className="flex flex-col gap-1 items-start mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="banPeriod"
                  value="7 Days"
                  checked={banPeriod === "7 Days"}
                  onChange={(e) => setBanPeriod(e.target.value)}
                  className="accent-black text-[10px]"
                />
                Ban for 1 day
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="banPeriod"
                  value="7 Days"
                  checked={banPeriod === "7 Days"}
                  onChange={(e) => setBanPeriod(e.target.value)}
                  className="accent-black text-[10px]"
                />
                Ban for 3 days
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="banPeriod"
                  value="7 Days"
                  checked={banPeriod === "7 Days"}
                  onChange={(e) => setBanPeriod(e.target.value)}
                  className="accent-black text-[10px]"
                />
                Ban for 7 days
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="banPeriod"
                  value="7 Days"
                  checked={banPeriod === "7 Days"}
                  onChange={(e) => setBanPeriod(e.target.value)}
                  className="accent-black text-[10px]"
                />
                Ban for 15 days
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="banPeriod"
                  value="7 Days"
                  checked={banPeriod === "7 Days"}
                  onChange={(e) => setBanPeriod(e.target.value)}
                  className="accent-black text-[10px]"
                />
                Ban for 30 days
              </label>

              <label className="flex items-center gap-2 cursor-pointer ">
                <input
                  type="radio"
                  name="banPeriod"
                  value="Permanent"
                  checked={banPeriod === "Permanent"}
                  onChange={(e) => setBanPeriod(e.target.value)}
                  className="accent-black text-[10px]"
                />
                Permanent
              </label>
            </div>

            <div className="my-[40px]">
              <p className="text-[18px] font-medium">Message</p>
              <input
              value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message for listener"
                className="border-[1px] pl-2 w-full border-[#808080] outline-none rounded-[4px]"
                type="text"
                name=""
                id=""
              />
            </div>

            <button
              className="w-full bg-[#525151] text-white py-2 rounded-lg hover:bg-[#3A3A3A]"
              onClick={handleBan}
            >
              Ban Listener
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeclinedSession;

