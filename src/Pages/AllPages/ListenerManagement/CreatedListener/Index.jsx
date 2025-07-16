import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ListenerDetails from './Components/ListenerDetails'
import SessionDetails from './Components/SessionDetails'
import RatingExp from './Components/RatingExp'
import DeclinedSession from './Components/DeclinedSession'
import PaymentDetails from './Components/PaymentDetails'
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify'


function CreatedListener() {

    const  location=useLocation();
    const from =location.state?.from;
    const listner = location.state
    const status = location.state.profileStatus


    
    console.log(location.state.profileStatus, "from");
    console.log(listner, "listner");

    
   
    const[activeTab,setActiveTab]=useState("Listener Details")
    let Tabs=[
        "Listener Details","Session Details","Ratings & Exp.","Declined Sessions","Payment Details"
    ];


    useEffect(() => {
      if (from=="Rejected") {
        setActiveTab("Declined Sessions")
        
      }
    
     
    }, [location])
    


   
    return (
      <div className="flex overflow-y-auto h-screen bg-[#F0F0F0]">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Adminheader />
          <div className="addnewlistener overflow-y-auto h-screen">
            <div className="">
              {/* Headings */}
              <div className="headings px-7 pt-7 flex justify-between items-center">
                <div className="left">
                  <h1 className="text-[32px]">Listener Management</h1>
                  <div className="flex gap-2 my-2">
                    <div className="dashboard flex justify-start items-center gap-1">
                      <div className="text-[#808080]">Dashboard</div>{" "}
                      <IoIosArrowForward className="text-[#808080]" />
                    </div>
                    <Link
                      to="/ListenerManagement"
                      className="dashboard cursor-pointer flex justify-start items-center gap-1"
                    >
                      <div className="text-[#808080]">Listener Management</div>{" "}
                      <IoIosArrowForward className="text-[#808080]" />
                    </Link>
                    <div className="listener text-[16px]">Listener Details</div>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div
                className={`w-[75%] mx-7 p-2 my-4 flex justify-between  ${
                  status === "Pending" ? "bg-[#D9D9D9]" : "bg-[#3A3A3A]"
                } bg-[#3A3A3A] rounded-[12px]`}
              >
                {Tabs.map((item) => {
                  const isDisabled =
                    status === "Pending" && item !== "ListenerDetails";

                  return (
                    <div
                      onClick={() => {
                        if (isDisabled) {
                          // toast.error("You cannot edit this listener")
                        } else {
                          setActiveTab(item);
                        }
                      }}
                      className={`px-4 py-1 text-center cursor-pointer rounded-[8px] ${
                        activeTab === item
                          ? "bg-white text-black"
                          : "text-white bg-[#3A3A3A]"
                      } ${
                        isDisabled
                          ? " bg-transparent text-black cursor-not-allowed"
                          : "text-black "
                      }`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              {activeTab == "Listener Details" && (
                <ListenerDetails status={status} listner={listner} />
              )}
              {activeTab == "Session Details" && (
                <SessionDetails listner={listner} />
              )}
              {activeTab == "Ratings & Exp." && <RatingExp listner={listner} />}
              {activeTab == "Declined Sessions" && (
                <DeclinedSession listner={listner} />
              )}
              {activeTab == "Payment Details" && (
                <PaymentDetails listner={listner} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default CreatedListener