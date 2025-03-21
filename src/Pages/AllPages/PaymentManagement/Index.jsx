// import React from 'react'
// import PaymentManagementTable from './Componenets/PaymentManagementTable'
// import Sidebar from 'Components/Sidebar'
// import Adminheader from 'Components/Adminheader'

// function PaymentManagement() {
//   return (
//     <div>
//         <div className='flex bg-[#F0F0F0]'>
//         <Sidebar/>
//         <div className="rght w-full auto flex flex-col">
//         <Adminheader />
//         <PaymentManagementTable/>
//         </div>
       
//     </div>
//     </div>
//   )
// }

// export default PaymentManagement



import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from 'Components/Sidebar';
import Adminheader from 'Components/Adminheader';
import { PiExportBold } from "react-icons/pi";
import axios from 'axios';
import API_ENDPOINTS from 'Configs/Endpoints';







function PaymentManagement() {
  const navigate = useNavigate();
const [listnerData, setListnerData] = useState([])

  
 
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of rows per page

  // Calculate the indices for slicing the table data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listnerData.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(listnerData.length / itemsPerPage);

  // Handle Back button click
  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };


const getListeners = async () => {
  try {
    const token = localStorage.getItem("authToken"); // Retrieve and parse user data
    // const token = user?.token; // Extract the token

    if (!token) {
      console.error("No token found");
      return;
    }

    const response = await axios.get(`${API_ENDPOINTS.GetListnerPaymentRequests}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the request
      },
    });
setListnerData(response.data)
    response.data.data.length > 0 && console.log(response.data.data);
  } catch (error) {
    console.error("Error fetching listeners:", error);
  }
};

useEffect(() => {
  getListeners()

}, [])

console.log("listnerData", listnerData);

  const handleRowAction = (status,listner) => {
    switch (status) {
      case 'Pending':
        navigate("/PaymentManagement/PendingPayment", {
          state: { status, ...listner },
        });
        break;
      case 'Successful':
        navigate("/PaymentManagement/SuccessfulPayment", {
          state: { status, ...listner },
        });
        break;
      default:
        console.error('Unknown status:', status);
        break;
    }
  };
  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      <Sidebar />
      <div className=" w-full  flex flex-col">
        <Adminheader />
        <div className="p-7  6 overflow-y-auto h-screen scrollbar-none">
          {/* headings */}
          <div className="headings flex justify-between items-center">
            <div className="left">
              <h1 className="text-[32px]">Payment Management</h1>
              <div className="flex gap-2 my-2">
                <div className=" dashbaord flex justify-start items-center gap-1">
                  <Link to="/Dashboard" className=" text-[#808080]">
                    Dashboard
                  </Link>{" "}
                  <IoIosArrowForward className="text-[#808080]" />
                </div>
                <div className="listener text-[16px]">Payment Management</div>
              </div>
            </div>
            <Link className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit">
              <PiExportBold className="text-[20px]" /> Export
            </Link>
          </div>
          {/* inputs */}
          <div className="w-full flex justify-between gap-20 items-center my-4 ">
            <div className="search w-1/3 flex justify-start items-center bg-white rounded-3xl ">
              <CiSearch size={"27px"} className=" text-[#808080]  mx-[13px] " />
              <input
                className="w-full mr-3 py-2 rounded-3xl bg-transparent outline-none "
                placeholder="Search by Listener Name.."
                type="text"
              />
            </div>
            <div className="sortbystatus flex justify-end items-center gap-3  w-1/3">
              <span className="text-[16px] ">Sort by Status</span>
              <div className=" py-2 px-3 bg-white rounded-[8px] border-[1px] border-[#808080]">
                <select
                  className="pr-12 border-white outline-none"
                  name=""
                  id=""
                >
                  {["All", "Pending", "Successful "].map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          {/* Tabledata */}

          <div className="my-5  font-sans overflow-x-auto">
            <table className="w-full shadow-lg text-left border-collapse">
              <thead className="bg-[#3A3A3A] text-white">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Listener Name </th>
                  <th className="p-3">Requested Amount (₹)</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Make Payment</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    // key={index}
                    // className={`${
                    //   index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    // } text-black`}
                    className="border-b-[1px] border-[#D9D9D9]"
                  >
                    <td className="p-3">{item.timestamp.slice(0, 10)}</td>
                    <td className="p-3 flex justify-start items-center gap-1">
                      {item.listenerName}{" "}
                    </td>
                    <td className="p-3">{item.requestedAmount} </td>
                    <td
                      className={`p-3 font-500 ${
                        item.status === "Pending"
                          ? "text-[#FF5D5D]"
                          : item.status === "Successful"
                          ? "text-[#0D894F]"
                          : ""
                      }`}
                    >
                      {item.status}
                    </td>
                    <td className="p  w-fit">
                      {" "}
                      <div
                        onClick={() => {
                          handleRowAction(item.status, item);
                        }}
                        className="border-[1px] cursor-pointer rounded-[6px] px-4 py-1 border-black w-fit"
                      >
                        <IoArrowForward className="text-[18px] font-normal" />
                      </div>
                    </td>
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
                className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
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
                className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <IoArrowForward /> <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentManagement