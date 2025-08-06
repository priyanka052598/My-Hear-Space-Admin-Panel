import axios from 'axios';
import API_ENDPOINTS from 'Configs/Endpoints';
import React, { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

function TransactionDetails() {

  const navigate = useNavigate();



  let tableData = [
    {
      number: 1,
      phone: " 6355806885",
      walletbalance: " 1,200.45",
      totalcredited: "1200",
      status: "Pending",
    },









  ];
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of rows per page
  const [transactionsData, setTransactionsData] = useState([])

  // Calculate the indices for slicing the table data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactionsData?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Total number of pages
  const totalPages = Math.ceil(transactionsData?.length / itemsPerPage);

  // Handle Back button click
  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };




 const getTransactions = async () => {
   try {
     const token = localStorage.getItem("authToken"); // Retrieve and parse user data
     // const token = user?.token; // Extract the token

     if (!token) {
       console.error("No token found");
       return;
     }

     const response = await axios.get(`${API_ENDPOINTS.getTransactions}`, {
       headers: {
         Authorization: `Bearer ${token}`, // Include the token in the request
       },
     });
     setTransactionsData(response.data.transactions || []);
     response.data.data.length > 0 && console.log(response.data.data);
   } catch (error) {
     console.error("Error fetching listeners:", error);
   }
 };

 useEffect(() => {
     
     getTransactions()
 
   }, []);

  return (
    <div>
      {" "}
      {/* Tabledata */}
      <div className="my-5  font-sans overflow-x-auto">
        <table className="w-full shadow-lg text-left border-collapse">
          <thead className="bg-[#3A3A3A] text-white">
            <tr>
              <th className="p-3">Sr. No.</th>
              <th className="p-3">Date </th>
              <th className="p-3"> User’s Registered phone number</th>
              <th className="p-3">Amount Credited (₹)</th>
              <th className="p-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr className="border-b-[1px] border-[#D9D9D9]">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex justify-start items-center gap-1">
                  {item.date.slice(0, 10)}{" "}
                </td>
                <td className="p-3">{item.phone} </td>
                <td className="p-3">{item.amountCredited} </td>
                <td className="p  w-fit">
                  {" "}
                  <Link
                    state={{
                      phone: item.phone,
                      walletBalance: item.walletbalance,
                      totalCredited: item.totalcredited,
                    }}
                    to="/user-wallet-details/walletdetails"
                  >
                    <div className="border-[1px] cursor-pointer rounded-[6px] px-4 py-1 border-black w-fit">
                      <IoArrowForward className="text-[18px] font-normal" />
                    </div>
                  </Link>
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
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoArrowForward /> <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails