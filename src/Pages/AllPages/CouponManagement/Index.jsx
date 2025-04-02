// import Adminheader from 'Components/Adminheader'
// import Sidebar from 'Components/Sidebar'
// import React, { useState } from 'react'
// import { CiSearch } from 'react-icons/ci'
// import { FiPlus } from 'react-icons/fi'
// import { IoIosArrowForward } from 'react-icons/io'
// import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
// import { Link, useNavigate } from 'react-router-dom'


// function CouponManagement() {

//     const navigate = useNavigate();
//     const [couponData, setCouponData] = useState([])



//     // Pagination state
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 9; // Number of rows per page

//     // Calculate the indices for slicing the table data
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = couponData.slice(indexOfFirstItem, indexOfLastItem);

//     // Total number of pages
//     const totalPages = Math.ceil(couponData.length / itemsPerPage);

//     // Handle Back button click
//     const handleBack = () => {
//         if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//     };

//     // Handle Next button click
//     const handleNext = () => {
//         if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//     };

//     return (
//         <div> <div className='flex h-screen bg-[#F0F0F0]'>
//             <Sidebar />
//             <div className=" w-full  flex flex-col">
//                 <Adminheader />
//                 <div className='p-7   overflow-y-auto h-screen scrollbar-none'>
//                     {/* header */}
//                     <div className='flex justify-between items-center'>


//                         {/* headings */}
//                         <div className="headings ">

//                             <h1 className='text-[32px]'> Coupon Management</h1>
//                             <div className='flex gap-2 my-2'>
//                                 <div className=' dashbaord flex justify-start items-center gap-1'>
//                                     <Link to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
//                                 </div>
//                                 <div className="listener text-[16px]">
//                                     Coupon Management
//                                 </div>
//                             </div>


//                         </div>
//                         <Link className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit">
//                             <FiPlus />  Add New Coupon
//                         </Link>

//                     </div>
//                     {/* search input */}
//                     <div className="search w-1/2 my-4 flex justify-start items-center bg-white rounded-3xl ">
//                         <CiSearch size={"27px"} className=" text-[#808080]  mx-[13px] " />
//                         <input
//                             className="w-full mr-3 py-2 rounded-3xl bg-transparent outline-none "
//                             placeholder="Search by Coupon Code.."
//                             type="text"
//                         />
//                     </div>
//                          {/* Tabledata */}

//                 <div className="my-5  font-sans overflow-x-auto">
//                     <table className="w-full shadow-lg text-left border-collapse">
//                         <thead className="bg-[#3A3A3A] text-white">
//                             <tr>
//                                 <th className="p-3">Coupon Code</th>
//                                 <th className="p-3">Description  </th>
//                                 <th className="p-3">Status  </th>
//                                 <th className="p-3">Edit</th>
                            
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {currentItems.map((item, index) => (
//                                 <tr
                                   
//                                     className="border-b-[1px] border-[#D9D9D9]"
//                                 >
//                                     <td className="p-3 flex justify-start items-center gap-1">
                                      
//                                     </td>
//                                     <td className="p-3"> </td>
//                                     <td>
                                     
//                                     </td>
//                                     <td className="p  w-fit">
                                    
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     {/* Pagination Controls */}
//                     <div className="buttons flex items-center gap-8 mt-8">
//                         {/* Back Button */}
//                         <button
//                             onClick={handleBack}
//                             disabled={currentPage === 1}
//                             className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//                                 }`}
//                         >
//                             <IoArrowBack /> <span>Back</span>
//                         </button>

//                         {/* Page Indicator */}
//                         <span>
//                             Page {currentPage} of {totalPages}
//                         </span>

//                         {/* Next Button */}
//                         <button
//                             onClick={handleNext}
//                             disabled={currentPage === totalPages}
//                             className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${currentPage === totalPages
//                                     ? "opacity-50 cursor-not-allowed"
//                                     : ""
//                                 }`}
//                         >
//                             <IoArrowForward /> <span>Next</span>
//                         </button>
//                     </div>
//                 </div>
//                 </div>
           
//             </div>
//         </div>


//         </div>
//     )
// }

// export default CouponManagement



import Adminheader from 'Components/Adminheader';
import Sidebar from 'Components/Sidebar';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaEdit, FaRegEdit } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { MdEdit, MdDelete, MdSave } from 'react-icons/md';
import { MdToggleOn } from "react-icons/md";
import Switch from "react-switch";


import { MdToggleOff } from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import { FaSquareCheck } from 'react-icons/fa6';

function CouponManagement() {
    const [couponData, setCouponData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [newCoupon, setNewCoupon] = useState({ code: '', description: '', status: '' });
    const [isChecked, setIsChecked] = useState(true);
    const [searchValue, setSearchValue] = useState("")


    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = couponData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(couponData.length / itemsPerPage);

    const handleBack = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    // Add a new row for a coupon
    const handleAddNew = () => {
        setCouponData([...couponData, { code: '', description: '', status: '', isNew: true }]);
    };

    // Edit coupon
    const handleEdit = (index) => {
        setEditIndex(index);
    };

    // Save updated or new coupon
    const handleSave = (index) => {
        setCouponData((prev) =>
            prev.map((item, i) => (i === index ? { ...item, isNew: false } : item))
        );
        setEditIndex(null);
    };

    // Delete coupon
    const handleDelete = (index) => {
        setCouponData(couponData.filter((_, i) => i !== index));
    };

    // Handle input change for a specific row
    const handleInputChange = (index, field, value) => {
        setCouponData((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        );
    };



    const handleToggleStatus = (index) => {
        setCouponData((prev) =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
                    : item
            )
        );
    };

    // useEffect(() => {
    //     getListeners();
    //   }, [searchCouponCode,]);
    

    return (
        <div className="flex h-screen bg-[#F0F0F0]">
            <Sidebar />
            <div className="w-full flex flex-col">
                <Adminheader />
                <div className="p-7 overflow-y-auto h-screen scrollbar-none">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-[32px]">Coupon Management</h1>
                            <div className="flex gap-2 my-2">
                                <div className="flex items-center gap-1">
                                    <Link to="/Dashboard" className="text-[#808080]">
                                        Dashboard
                                    </Link>
                                    <IoIosArrowForward className="text-[#808080]" />
                                </div>
                                <span className="text-[16px]">Coupon Management</span>
                            </div>
                        </div>
                        <button
                            className="flex items-center text-white rounded-[8px] bg-[#3A3A3A] px-5 py-3 gap-2"
                            onClick={handleAddNew}
                        >
                            <FiPlus /> Add New Coupon
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="search w-1/2 my-4 flex justify-start items-center bg-white rounded-3xl">
                        <CiSearch  size="27px" className="text-[#808080] mx-[13px]" />
                        <input 
                        value={searchValue} 
                        onChange={(e)=>{setSearchValue(e.target.value)}}
                            className="w-full py-2 bg-transparent outline-none"
                            placeholder="Search by Coupon Code.."
                            type="text"
                        />
                    </div>

                    {/* Table Data */}
                    <div className="my-5 overflow-x-auto">
                        <table className="w-full shadow-lg text-left border-collapse">
                            <thead className="bg-[#3A3A3A] text-white">
                                <tr>
                                    <th className="p-3 ">Coupon Code</th>
                                    <th className="p-3">Description</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={index} className="border-b border-[#D9D9D9]">
                                        {/* Coupon Code */}
                                        <td className="p-3">
                                            {editIndex === index || item.isNew ? (
                                                <input
                                                placeholder='Enter code'
                                                    type="text"
                                                    value={item.code}
                                                    onChange={(e) => handleInputChange(index, 'code', e.target.value)}
                                                    className="border p-2 w-full rounded-md"
                                                />
                                            ) : (
                                                item.code
                                            )}
                                        </td>

                                        {/* Description */}
                                        <td className="p-3">
                                            {editIndex === index || item.isNew ? (
                                                <input
                                                placeholder='Enter description'
                                                    type="text"
                                                    value={item.description}
                                                    onChange={(e) =>
                                                        handleInputChange(index, 'description', e.target.value)
                                                    }
                                                    className="border p-2 w-full rounded-md"
                                                />
                                            ) : (
                                                item.description
                                            )}
                                        </td>

{/* Status */}

<td className="p-3    ">
    <div className='flex justify-start items-center gap-2'>

 
      <Switch onChange={() => setIsChecked(!isChecked)} checked={isChecked} />

      <span className="text-sm  font-medium">{isChecked ? "Active" : "Inactive"}</span>
      </div>
    </td>


                                        {/* Actions */}
                                        <td className="p-3 flex justify-start items-center mt-2 gap-1">
                                            {editIndex === index || item.isNew ? (
                                                <button onClick={() => handleSave(index)} className="text-green-500">
                                                    <FaSquareCheck size={28} />
                                                </button>
                                            ) : (
                                                <button onClick={() => handleEdit(index)} className="text-[#3a3a3a]">
                                                    <MdEdit size={28} />
                                                </button>
                                            )}
                                            <button onClick={() => handleDelete(index)} className="text-red-500">
                                                <RiDeleteBin6Line size={28} />
                                            </button>
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

export default CouponManagement;
