import axios from 'axios';
import API_ENDPOINTS from 'Configs/Endpoints';
import React, { useEffect, useState } from 'react'
import LinesScatterGraph from 'Utils/LinesScatterGrapgh/LInesScatterGraph'
// import LinesScatterGrapgh from 'Utiles/LinesScatterGrapgh/LinesScatterGraph';


function Analytics() {
    const [credits, setCredits] = useState()
    const [monthly, setMonthly] = useState();



console.log("monthly", monthly);

    const getCredits = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve and parse user data
        // const token = user?.token; // Extract the token

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(`${API_ENDPOINTS.getWalletCredit}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        });
        setCredits(response.data)
      } catch (error) {
        console.error("Error fetching listeners:", error);
      }
    };
    const getMonthly = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve and parse user data
        // const token = user?.token; // Extract the token

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(`${API_ENDPOINTS.getMonthlyCredit}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        });
        setMonthly(response.data);
        // setTransactionsData(response.data.transactions || []);
        response.data.data.length > 0 && console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching listeners:", error);
      }
    };


    useEffect(() => {
      getCredits();
      getMonthly()
    }, []);


  return (
    <>
      {/* Total Payment Overview */}
      <div className="totalpaymentoverview w-4/5 px-[40px] my-5  py-[24px] rounded-[24px] bg-white">
        <div className=" heading text-[24px] font-medium mb-5 ">
          Total Credited
        </div>
        <div className="boxes flex gap-3 w-full">
          <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{credits?.today}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Today
            </span>
          </div>
          <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{credits?.last7Days}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Last 7 Days
            </span>
          </div>
          <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{credits?.last30Days}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Last 30 Days
            </span>
          </div>
          <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{credits?.last180Days}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Last 180 Days
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3  w-full">
        <div className="graoh w-4/5 px-[40px]   py-[30px] rounded-[24px] bg-white">
          <div className="heading p-7 text-[24px]">Funds Credited</div>
          <div className="grapgh">
            <LinesScatterGraph monthlyData={monthly} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics