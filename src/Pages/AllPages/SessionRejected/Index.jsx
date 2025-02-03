import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { PiExportBold } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'

function SessionRejected() {
  const [activeTab, setActiveTab] = useState("User Details")
  let tabs = ["User Details", "Transaction Details", "Analytics"]


  const navigate = useNavigate();



  let tableData = [
    {
      name: " 6355806885",
      banStatus: " Ban for 2 days",
      UnbanOn: "1200",
      sessionRejected:"2",
      noOfTimesBan:"2"
    },
  










  ];
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of rows per page

  // Calculate the indices for slicing the table data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Handle Back button click
  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  return (
    <div> <div className='flex h-screen bg-[#F0F0F0]'>
    <Sidebar />
    <div className=" w-full  flex flex-col">
      <Adminheader />
      <div className='p-7  6 overflow-y-auto h-screen scrollbar-none'>
        {/* headings */}
        <div className="headings flex flex-col justify-start ">
            <h1 className='text-[32px]'>Sessions Rejected</h1>
            <div className='flex gap-2 my-2'>
              <div className=' dashbaord flex justify-start items-center gap-1'>
                <Link  to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
              </div>
              <div className="listener text-[16px]">
              Sessions Rejected        </div>
            </div>
        

        </div>
        <div>
          {/* inputs */}
          
            <div className="search w-1/2 mt-7 border-[1px] border-[#808080] flex justify-start items-center bg-white rounded-3xl ">
              <CiSearch size={"27px"} className=' text-[#808080]  mx-[13px] ' />
              <input className='w-full mr-3 py-2 rounded-3xl bg-white outline-none bg-transparent' placeholder='Search by Listener Name' type="text" />

            </div>
          {/* Tabledata */}

          <div className="my-5  font-sans overflow-x-auto">
            <table className="w-full shadow-lg text-left border-collapse">
              <thead className="bg-[#3A3A3A] text-white">
                <tr>
                  <th className="p-3">Listener Name</th>
                  <th className="p-3">No. of Session Rejected </th>
                  <th className="p-3">No. of times Ban</th>
                  <th className="p-3">Ban Status</th>
                  <th className="p-3">Unban on</th>
                  <th className="p-3">Actions </th>

                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    // key={index}
                    // className={`${
                    //   index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    // } text-black`}
                    className='border-b-[1px] border-[#D9D9D9]'
                  >
<td className="p-3 ">{item.name} </td>
                    <td className="p-3">{item.sessionRejected} </td>
                    <td className="p-3">{item.noOfTimesBan} </td>
                    <td className="p-3">{item.banStatus} </td>
                    <td className="p-3">{item.UnbanOn} </td>
                    <td className="p  w-fit"> <Link   state={{ from: "Rejected" }} 
  to={"/ListenerManagement/CreatedListener"}>
                                            <div
                                              className='border-[1px] cursor-pointer rounded-[6px] px-4 py-1 border-black w-fit'><IoArrowForward className='text-[18px] font-normal' /></div>
                                          </Link></td>
                 
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="buttons flex items-center gap-8 mt-8">
              {/* Back Button */}
              <button
                onClick={handleBack}
                disabled={currentPage === 1}
                className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                <IoArrowBack /> <span>Back</span>
              </button>

              {/* Page Indicator */}
              <span>
                Page {currentPage} of {totalPages}
              </span>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                <IoArrowForward /> <span>Next</span>
              </button>
            </div>
          </div>
        </div> 
        



      </div>
    </div>
  </div></div>
  )
}

export default SessionRejected