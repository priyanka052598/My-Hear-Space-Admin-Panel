import React, { useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { IoWallet } from "react-icons/io5";


function PaymentDetails() {


   let tableData = [
   
      {
        number: "1",
        date: "14/12/24",
        amount: "1200",
        status: "Pending",
        payment: "450",
      },
      {
        number: "2",
        date: "14/12/24",
        amount: "1200",
        status: "Pending",
        payment: "450",
      },
      {
        number: "3",
        date: "14/12/24",
        amount: "1200",
        status: "Successful",
        payment: "450",
      },
      {
        number: "4",
        date: "14/12/24",
        amount: "1200",
        status: "Successful",
        payment: "450",
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
    
      
   <>
   <div className='px-7 py-4 flex gap-7'>
   <div className='w-[80%] '>
     <div className="  font-sans overflow-x-auto">
            <table className="w-full shadow-lg  border-[1px] border-[#d9d9d9] text-left border-collapse">
              <thead className="bg-[#3A3A3A] text-white">
                <tr>
                  <th className="p-3">Sr. No.</th>
                  <th className="p-3">Date of Request</th>
                  <th className="p-3">Requested Amount (₹)</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Make Payment </th>
    
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
                    <td className="p-3">{item.number}</td>
                    <td className="p-3">{item.date}</td>
                    <td className="p-3">{item.amount} </td>
                    <td className={`p-3 font-500 ${item.status === "Pending"
                        ? "text-[#FF5D5D]"
                        : item.status === "Successful"
                          ? "text-[#0D894F]"
                        
                              : ""
                      }`}>{item.status}</td>
                    <td className="p  w-fit"> <div onClick={()=>{
                      handleRowAction(item.status)
                    }} className='border-[1px] cursor-pointer rounded-[6px] px-4 py-1 border-black w-fit'><IoArrowForward className='text-[18px] font-normal' /></div></td>
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
   {/* Balance/Credited */}
   <div className=' w-[20%] flex flex-col gap-7'>
    <div className="balance bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
      
      <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><IoWallet className='text-[40px]'/></div>
      <div className='flex flex-col gap-[4px]'>
      <span className='text-[28px] text-black'>₹250.45</span>
      <span className='text-[16px] text-[#808080]'>Wallet Balance</span>
      </div>

    </div>
    <div className="balance bg-white rounded-[24px] flex flex-col justify-center items-center gap-[16px] px-[12px] py-[24px]">
      
      <div className='p-4 bg-[#F0F0F0]  rounded-[12px]'><IoWallet className='text-[40px]'/></div>
      <div className='flex flex-col gap-[4px]'>
      <span className='text-[28px] text-black'>₹250.45</span>
      <span className='text-[16px] text-[#808080]'>Wallet Balance</span>
      </div>

    </div>
   </div>

        

   </div>
   {/* Button */}

<div  className='bg-white flex justify-end  border-t-[1px] py-3 border-[#808080]'>
<button className='text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]' type="button">Edit Details</button>
                    </div>
   </>
  )
}

export default PaymentDetails