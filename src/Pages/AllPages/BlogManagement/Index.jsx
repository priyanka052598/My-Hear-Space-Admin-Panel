import Adminheader from 'Components/Adminheader';
import Sidebar from 'Components/Sidebar';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { GoStarFill } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeletePopup from 'Components/DeletePopup';


function BlogManagement() {
    const [showPopup, setShowPopup] = useState()
    const [deleteIndex, setDeleteIndex] = useState(null);

    const [tableData, setTableData] = useState([
        {
            title: "1 Main Problems In A Long Distance Relationship",
            tag: "Relationship"
        },
        {
            title: "2 Main Problems In A Long Distance Relationship",
            tag: "Relationship"
        },
        {
            title: "3 Main Problems In A Long Distance Relationship",
            tag: "Relationship"
        },
        {
            title: "4 Main Problems In A Long Distance Relationship",
            tag: "Breakup"
        },


    ])
    const navigate = useNavigate();



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


    const handleDelete = (index) => {
        // const globalIndex = indexOfFirstItem + index; // Convert page index to full list index
        // const updatedData = tableData.filter((_, i) => i !== globalIndex);
        // setTableData(updatedData); // Update state
        setShowPopup(true);
        setDeleteIndex(index);


        // Hide popup after 2 seconds
        // setTimeout(() => setShowPopup(false), 2000);
    };


    const confirmDelete = () => {
        if (deleteIndex !== null) {
            const globalIndex = (currentPage - 1) * itemsPerPage + deleteIndex;
            setTableData((prev) => prev.filter((_, i) => i !== globalIndex));
        }
        setShowPopup(false);
        setDeleteIndex(null);
    };
    return (
        <div>  <div>  <div className='flex h-screen bg-[#F0F0F0]'>
            <Sidebar />
            <div className=" w-full  flex flex-col">
                <Adminheader />
                <div className='p-7  6 overflow-y-auto h-screen scrollbar-none'>
                    {/* headings */}
                    <div className="headings flex justify-between items-center">
                        <div className='left'>
                            <h1 className='text-[32px]'>Blog Management</h1>
                            <div className='flex gap-2 my-2'>
                                <div className=' dashbaord flex justify-start items-center gap-1'>
                                    <Link to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
                                </div>
                                <div className="listener text-[16px]">
                                    Blog Management                        </div>
                            </div>
                        </div>
                        <Link to="/BlogManagement/AddNewBlog" className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit">
                            <FiPlus />  Add New Blog
                        </Link>


                    </div>

                    {/* Tabledata */}

                    <div className="my-5  font-sans overflow-x-auto">
                        <table className="w-full shadow-lg text-left border-collapse">
                            <thead className="bg-[#3A3A3A] text-white">
                                <tr>
                                    <th className="p-3">Sr. No.</th>
                                    <th className="p-3">Title </th>
                                    <th className="p-3">Tag</th>
                                    <th className="p-3">Actions</th>

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
                                        <td className="p-3">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                        <td className="p-3">{item.title}</td>

                                        <td className="p-3">{item.tag} </td>
                                        <td className="p-3"> <div className='flex gap-2'>
                                            <Link to="/BlogManagement/EditBlog" className='bg-[#808080] text-white px-[16px] py-[4px] text-[22px] w-fit rounded-[8px]'> <GoPencil /> </Link>
                                            <button onClick={() => handleDelete(index)}
                                                className='border-[1px] border-[#FF5D5D] text-[#FF5D5D] px-[16px] py-[4px] text-[22px] w-fit rounded-[8px]'> <RiDeleteBin6Line /> </button>

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
            {/* {showPopup && <DeletePopup text={"Are you sure you want to delete this Blog?"} setShowPopup={setShowPopup} />} */}
            {showPopup && <DeletePopup setShowPopup={setShowPopup} text={"Are you sure you want to delete this Blog?"} confirmDelete={confirmDelete} />}

        </div>
        </div></div>
    )
}

export default BlogManagement