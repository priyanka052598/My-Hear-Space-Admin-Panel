import React, { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi2";
import { LuIndianRupee } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import Progressbar from "Utils/Progressbar/Progressbar";
import CircularGraph from "Utils/CircularGraph/CircularGraph";
// import LinesScatterGrapgh from 'Utiles/LinesScatterGrapgh/LinesScatterGraph';
import { GoStarFill } from "react-icons/go";
import axios from "axios";
import API_ENDPOINTS from "Configs/Endpoints";
import LinesScatterGraph from "Utils/LinesScatterGrapgh/LInesScatterGraph";
// import LinesScatterGraph from "../../../../Utiles/LinesScatterGrapgh/LinesScatterGraph"

function DashboardFile() {
  const [dashbaordData, setDashbaordData] = useState();




   const getDashboard = async () => {
     try {
       const token = localStorage.getItem("authToken");

       if (!token) {
         console.error("No token found");
         return;
       }

       const response = await axios.get(`${API_ENDPOINTS.getDasboard}`, {
         headers: { Authorization: `Bearer ${token}` },
       });
       console.log("response", response.data);
       setDashbaordData(response.data);
     } catch (error) {
       console.error("Error fetching listeners:", error);
     }
   };

   useEffect(() => {
     getDashboard();
   }, []);
  const VerticalMaleProgressbar = ({ progress }) => {
    return (
      <div
        style={{
          width: "22px",
          height: "100%",
          backgroundColor: "#d9d9d9",
          borderRadius: "10px",
          display: "flex",
          alignItems: "flex-end", // Aligns the inner bar to the top
        }}
      >
        <div
          style={{
            width: "100%",
            height: `${progress}%`,
            backgroundColor: "#000000",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    );
  };
  const VerticalFemaleProgressbar = ({ progress }) => {
    return (
      <div
        style={{
          width: "22px",
          height: "100%",
          backgroundColor: "#d9d9d9",
          borderRadius: "10px",
          display: "flex",
          alignItems: "flex-end", // Aligns the inner bar to the top
        }}
      >
        <div
          style={{
            width: "100%",
            height: `${progress}%`,
            backgroundColor: "#808080",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    );
  };
const getProgress = (value, total) => (total > 0 ? (value / total) * 100 : 0);

let sessions = dashbaordData?.sessions

let listenerComparison = dashbaordData?.listenerComparison
 const { male, female } = listenerComparison || {};
  const total = male + female;
  const malePercentage = total > 0 ? (male / total) * 100 : 0;
  const femalePercentage = total > 0 ? (female / total) * 100 : 0;


let ratingBreakdown = dashbaordData?.overallRating?.ratingBreakdown || {};
   const totalRatings = Object.values(ratingBreakdown).reduce(
     (a, b) => a + b,
     0
   );
let sessionComparison = dashbaordData?.sessionComparison
     const { chat, phoneCall, videoCall } = sessionComparison || {};

console.log("dashbaordData?.userDetails,", dashbaordData?.userDetails);
  return (
    <div className="w-full overflow-y-auto h-screen  scrollbar-none  p-7 ">
      {/* OVerview Portion */}
      <div className="Overview px-[40px] py-[24px]   rounded-[24px] bg-white ">
        <div className=" up-headings mb-5 flex justify-between items-center">
          <div className="left text-[24px] font-medium">Overview</div>
          <div className="right ">
            <span className="text-[16px] px-[12px] py-[6px] border-[1px] border-[#808080] rounded-[8px] mr-3">
              Today
            </span>
            <span className="text-[16px] px-[12px] py-[6px] border-[1px] border-[#808080] rounded-[8px] mr-3">
              Last 30 days
            </span>
            <span className="text-[16px] px-[12px] py-[6px] border-[1px] border-[#808080] rounded-[8px] mr-3">
              Last 1 year
            </span>
            <span className="text-[16px] px-[12px] py-[6px] border-[1px] border-[#808080] rounded-[8px] mr-3">
              Till Today
            </span>
          </div>
        </div>
        <div className="boxes  w-full flex justify-between gap-6">
          <div className="newusers w-1/4 border-[1px] rounded-[16px] border-[#808080] py-5 flex flex-col justify-center items-center">
            <div className="icon p-2 bg-[#F0F0F0] rounded-[12px] mb-2">
              <HiUsers className="text-[28px]" />
            </div>
            <span className="text-[32px]">
              {dashbaordData?.overview.newUsers}
            </span>
            <span className="text-[16px] text-[#808080]">New Users</span>
          </div>
          <div className="Listeners w-1/4 border-[1px] rounded-[16px] border-[#808080] py-5 flex flex-col justify-center items-center">
            <div className="icon p-2 bg-[#F0F0F0] rounded-[12px] mb-2">
              <FaHouseUser className="text-[28px]" />
            </div>
            <span className="text-[32px]">
              {" "}
              {dashbaordData?.overview.newListeners}{" "}
            </span>
            <span className="text-[16px] text-[#808080]">New Listeners</span>
          </div>
          <div className="newusers w-1/4 border-[1px] rounded-[16px] border-[#808080] py-5 flex flex-col justify-center items-center">
            <div className="icon p-2 bg-[#F0F0F0] rounded-[12px] mb-2">
              <LuIndianRupee className="text-[28px]" />
            </div>
            <span className="text-[32px]">
              {dashbaordData?.overview.totalCredited}
            </span>
            <span className="text-[16px] text-[#808080]">Total Credited </span>
          </div>
          <div className="newusers w-1/4 border-[1px] rounded-[16px] border-[#808080] py-5 flex flex-col justify-center items-center">
            <div className="icon p-2 bg-[#F0F0F0] rounded-[12px] mb-2">
              <FaPhone className="text-[28px]" />
            </div>
            <span className="text-[32px]">
              {" "}
              {dashbaordData?.overview.totalSessions}
            </span>
            <span className="text-[16px] text-[#808080]">Total Sessions</span>
          </div>
        </div>
      </div>
      {/* Total Payment Overview */}
      <div className="totalpaymentoverview px-[40px] my-5  py-[24px] rounded-[24px] bg-white">
        <div className=" heading text-[24px] font-medium mb-5 ">
          Total Payment Overview
        </div>
        <div className="boxes flex gap-3 w-full">
          <div className="1  w-1/5 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹ {dashbaordData?.paymentOverview.successfulPayments}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Successful Payments to Listener
            </span>
          </div>
          <div className="1  w-1/5 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{dashbaordData?.paymentOverview.pendingPayments}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Pending Payments to Listener
            </span>
          </div>
          <div className="1  w-1/5 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{dashbaordData?.paymentOverview.listenerWalletBalance}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Listener’s wallet balance
            </span>
          </div>
          <div className="1  w-1/5 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{dashbaordData?.paymentOverview.userWalletBalance}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              User’s wallet balance
            </span>
          </div>
          <div className="1  w-1/5 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
            <span className="text-[24px] text-black mb-2 font-medium">
              ₹{dashbaordData?.paymentOverview.totalAmountCredited}
            </span>
            <span className=" text-[16px] text-[#808080] text-center">
              Total Amount Credited
            </span>
          </div>
        </div>
      </div>
      {/* Sessions */}
      <div className="sessions flex gap-3 w-full">
        <div className="ongoingsessions px-[40px]   py-[24px] rounded-[24px] bg-white w-[50%]">
          <div className="heading mb-7 flex justify-between">
            <span className="text-[24px] text-black">Ongoing Sessions</span>
            <span className="text-[24px] text-black">
              {dashbaordData?.sessions.ongoingSessions}
            </span>
          </div>
          <div className="botom  w-full">
            <div className="chat text-[20px] w-full flex justify-between">
              <div>Chat</div>
              <div className="progress w-2/3 flex justify-end items-center gap-[10px]">
                <span>{dashbaordData?.sessions.chatSessions}</span>
                <div className="w-[130px]">
                  <Progressbar
                    progress={getProgress(
                      sessions?.chatSessions,
                      sessions?.ongoingSessions
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="chat my-3 text-[20px] w-full flex justify-between">
              <div>Phone Call</div>
              <div className="progress w-2/3   flex justify-end items-center gap-[10px]">
                <span>{dashbaordData?.sessions.phoneCallSessions}</span>
                <div className="w-[130px]">
                  <Progressbar
                    progress={getProgress(
                      sessions?.phoneCallSessions,
                      sessions?.ongoingSessions
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="chat text-[20px] w-full flex justify-between">
              <div>Video Call</div>
              <div className="progress w-2/3 flex justify-end items-center gap-[10px]">
                <span>{dashbaordData?.sessions.videoCallSessions}</span>
                <div className="w-[130px]">
                  <Progressbar
                    progress={getProgress(
                      sessions?.videoCallSessions,
                      sessions?.ongoingSessions
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="totalsessions px-[40px]   py-[24px] rounded-[24px] bg-white w-[50%]">
          <div className="heading mb-7 flex justify-between">
            <span className="text-[24px] text-black">Total Sessions</span>
            <span className="text-[24px] text-black">
              {dashbaordData?.sessions.totalSessions}
            </span>
          </div>
          <div className="botom  w-full">
            <div className="chat text-[20px] w-full flex justify-between">
              <div>Accepted</div>
              <div className="progress w-2/3 flex justify-end items-center gap-[10px]">
                <span>{dashbaordData?.sessions.acceptedSessions}</span>
                <div className="w-[130px]">
                  <Progressbar
                    progress={getProgress(
                      sessions?.acceptedSessions,
                      sessions?.totalSessions
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="chat my-3 text-[20px] w-full flex justify-between">
              <div>Missed </div>
              <div className="progress w-2/3   flex justify-end items-center gap-[10px]">
                <span>{dashbaordData?.sessions.missedSessions}</span>
                <div className="w-[130px]">
                  <Progressbar
                    progress={getProgress(
                      sessions?.missedSessions,
                      sessions?.totalSessions
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="chat text-[20px] w-full flex justify-between">
              <div>Rejected </div>
              <div className="progress w-2/3 flex justify-end items-center gap-[10px]">
                <span>{dashbaordData?.sessions.rejectedSessions}</span>
                <div className="w-[130px]">
                  <Progressbar
                    progress={getProgress(
                      sessions?.rejectedSessions,
                      sessions?.totalSessions
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Circular graph */}
      <div className="circulargrapgh flex gap-3 my-5 w-full">
        <div className="listenerdetails flex justify-between items-center px-[40px]   py-[30px] rounded-[24px] bg-white w-[50%]">
          <div className="graph w-1/3">
            <CircularGraph listenerDetails={dashbaordData?.listenerDetails} />
          </div>
          <div className="text w-1/2">
            <div className="heading    text-center text-[20px]">
              Listener Details
            </div>
            <div className="middle gap-[10px] my-4 flex flex-col">
              <div className="1 flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-[16px]">In session</span>
                </div>
                <span className="text-[16px]">
                  {dashbaordData?.listenerDetails.inSession}
                </span>
              </div>
              <div className="1 flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-[#808080] rounded-full"></div>
                  <span className="text-[16px]"> Online</span>
                </div>
                <span className="text-[16px]">
                  {" "}
                  {dashbaordData?.listenerDetails.online}
                </span>
              </div>
              <div className="1 flex pb-2 border-b-[1px] border-[#D9D9D9] justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
                  <span className="text-[16px]">Offline</span>
                </div>
                <span className="text-[16px]">
                  {" "}
                  {dashbaordData?.listenerDetails.offline}
                </span>
              </div>
            </div>
            <div className="strenth flex  text-[16px] justify-between items-center">
              <span>Total strenth</span>{" "}
              <span> {dashbaordData?.listenerDetails.totalStrength}</span>
            </div>
          </div>
        </div>
        <div className="usersdetails flex justify-between items-center px-[40px]   py-[30px] rounded-[24px] bg-white w-[50%]">
          <div className="graph w-1/3">
            <CircularGraph listenerDetails={dashbaordData?.userDetails} />
          </div>
          <div className="text w-1/2">
            <div className="heading    text-center text-[20px]">
              User Details
            </div>
            <div className="middle gap-[10px] my-4 flex flex-col">
              <div className="1 flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-[16px]">In session</span>
                </div>
                <span className="text-[16px]">
                  {dashbaordData?.userDetails.inSession}
                </span>
              </div>
              <div className="1 flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-[#808080] rounded-full"></div>
                  <span className="text-[16px]"> Online</span>
                </div>
                <span className="text-[16px]">
                  {" "}
                  {dashbaordData?.userDetails.online}
                </span>
              </div>
              <div className="1 flex pb-2 border-b-[1px] border-[#D9D9D9] justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
                  <span className="text-[16px]">Offline</span>
                </div>
                <span className="text-[16px]">
                  {" "}
                  {dashbaordData?.userDetails.offline}
                </span>
              </div>
            </div>
            <div className="strenth flex  text-[16px] justify-between items-center">
              <span>Total strenth</span>{" "}
              <span> {dashbaordData?.userDetails.totalUsers}</span>
            </div>
          </div>
        </div>
      </div>
      {/* LInes-Scatter-grapgh */}
      <div className="flex gap-3  w-full">
        <div className="graoh w-3/4 px-[40px]   py-[30px] rounded-[24px] bg-white">
          <div className="heading p-7 text-[24px]">Funds Credited</div>
          <div className="grapgh">
            <LinesScatterGraph />
          </div>
        </div>
        {/* Listener comparison */}

        <div className=" flex flex-col justify-center items-center w-1/4 px-[40px]   py-[30px] rounded-[24px] bg-white">
          <div className="heading text-[20px]">Listener Comparison</div>

          <div className="grapgh my-10 w-full h-1/2 flex justify-center gap-12">
            <VerticalMaleProgressbar progress={malePercentage} />
            <VerticalFemaleProgressbar progress={femalePercentage} />
          </div>
          <div className="bootom w-full flex flex-col gap-2">
            <div className="male flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="circle w-3 h-3 bg-black rounded-full"></div>
                <span>Male</span>
              </div>
              <div className="percentae">{malePercentage.toFixed(0)}%</div>
            </div>
            <div className="female flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="circle w-3 h-3 bg-[#808080] rounded-full"></div>
                <span>Female</span>
              </div>
              <div className="percentae">{femalePercentage.toFixed(0)}%</div>
            </div>
          </div>
        </div>
      </div>
      {/* Overall App Rating */}
      <div className="flex gap-3 my-5 w-full">
        <div className=" Overall-App-Rating  px-[40px]   py-[30px] rounded-[24px] bg-white w-[50%]">
          <div className="heading text-[24px]">Overall App Rating</div>
          <div className="bootom flex">
            <div className="left w-1/2 flex flex-col justify-center items-center">
              <div className="flex   items-center gap-2">
                <span className="text-[40px] font-semibold">
                  {dashbaordData?.overallRating.rating}
                </span>
                <GoStarFill className="text-[40px]" />{" "}
              </div>
              <span className="text-[18px] ">
                ({dashbaordData?.overallRating.totalReviews})
              </span>
            </div>
            <div className="right w-1/2 flex flex-col gap-[5px]">
              {Object.keys(ratingBreakdown).map((rating) => {
                const count = ratingBreakdown[rating];
                const percentage =
                  totalRatings > 0 ? (count / totalRatings) * 100 : 0;

                return (
                  <div
                    key={rating}
                    className="flex justify-center items-center gap-[12px]"
                  >
                    <span className="text-[18px]">{rating}</span>
                    <div className="w-full gap-[12px] flex justify-center items-center h-full">
                      <GoStarFill className="text-[32px]" />
                      <Progressbar progress={percentage} />
                      <span>{percentage.toFixed(0)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Session Comparison */}

        <div className="Session Comparison flex justify-between items-center px-[40px]   py-[30px] rounded-[24px] bg-white w-[50%]">
          <div className="graph w-1/3">
            <CircularGraph listenerDetails={sessionComparison} />
          </div>

          <div className="text w-1/2">
            <div className="heading    text-center text-[20px]">
              Session Comparison
            </div>
            <div className="middle gap-[10px] my-4 flex flex-col">
              <div className="1 flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-[16px]">Phone Call</span>
                </div>
                <span className="text-[16px]">550%</span>
              </div>
              <div className="1 flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-[#808080] rounded-full"></div>
                  <span className="text-[16px]"> Video call</span>
                </div>
                <span className="text-[16px]">25%</span>
              </div>
              <div className="1 flex  justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="circle w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
                  <span className="text-[16px]">Chat</span>
                </div>
                <span className="text-[16px]">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardFile;
