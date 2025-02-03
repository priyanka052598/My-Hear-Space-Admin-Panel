import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from 'Components/Sidebar';
import Adminheader from 'Components/Adminheader';






function ListenerManagementTable() {
  const navigate = useNavigate();


  
  let tableData = [
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Update"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Update"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Update"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Submitted"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Submitted"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Pending"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Pending"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Created"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Created"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Pending"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Created"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Created"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Pending"
    },
    {
      name: "Mohit Asnani",
      phone: "6355806885",
      rating: "4.3",
      experience: "1457",
      wallet: "450",
      status: "Pending"
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




  const handleRowAction = (status) => {
    switch (status) {
      case 'Pending':
        navigate('/PendingListener');
        break;
      case 'Created':
        navigate('/ListenerManagement/CreatedListener');
        break;
      case 'Submitted':
        navigate('/SubmittedListener');
        break;
      case 'Update':
        navigate('/UpdateListener');
        break;
      default:
        console.error('Unknown status:', status);
        break;
    }
  };
  return (
    <div className='flex h-screen bg-[#F0F0F0]'>
        <Sidebar/>
    <div className=" w-full  flex flex-col">
        <Adminheader />
    <div className='p-7  6 overflow-y-auto h-screen scrollbar-none'>
      {/* headings */}
      <div className="headings flex justify-between items-center">
        <div className='left'>
          <h1 className='text-[32px]'>Listener Management</h1>
          <div className='flex gap-2 my-2'>
            <div className=' dashbaord flex justify-start items-center gap-1'>
              <Link  to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
            </div>
            <div className="listener text-[16px]">
              Listener Management
            </div>
          </div>
        </div>
        <Link to="/ListenerManagement/AddNewListener" className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit">
          <FiPlus />  Add New Listener
        </Link>

      </div>
      {/* inputs */}
      <div className='w-full flex gap-20 items-center my-4 '>
        <div className="search w-1/3 flex justify-start items-center bg-white rounded-3xl ">
          <CiSearch size={"27px"} className=' text-[#808080]  mx-[13px] ' />
          <input className='w-full mr-3 py-2 rounded-3xl  outline-none bg-transparent' placeholder='Search by Listener Name..' type="text" />

        </div>
        <div className="sortbystatus flex justify-center items-center gap-3  w-1/3">
          <span className='text-[16px] '>Sort by Status</span>
          <div className=' py-2 px-3 bg-white rounded-[8px] border-[1px] border-[#808080]'>
            <select className='pr-12 border-white outline-none' name="" id="">
              {
                ["All", "Update", "Created ", "Pending", "Submitted"].map((item,) => {
                  return <option>{item}</option>
                })
              }

            </select>
          </div>

        </div>
        <div className="sortbyrating flex justify-center items-center gap-3  w-1/3">
          <span className='text-[16px] '>Sort by Rating</span>
          <div className=' py-2 px-3 bg-white rounded-[8px] border-[1px] border-[#808080]'>
            <select className='pr-12 border-white outline-none' name="" id="">
              <option>1 Star and above</option>
              <option>1 Stare</option>

              <option>2 Star and above</option>
              <option>3 Star and above</option>
              <option>4 Star and above</option>
            </select>
          </div>

        </div>
      </div>
      {/* Tabledata */}

      <div className="my-5  font-sans overflow-x-auto">
        <table className="w-full shadow-lg text-left border-collapse">
          <thead className="bg-[#3A3A3A] text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Experience</th>
              <th className="p-3">Wallet (₹)</th>
              <th className="p-3">Profile Status</th>
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
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3 flex justify-start items-center gap-1">{item.rating} <GoStarFill/></td>
                <td className="p-3">{item.experience} Hrs</td>
                <td className="p-3">{item.wallet}</td>
                <td className={`p-3 font-500 ${item.status === "Pending"
                    ? "text-[#FF5D5D]"
                    : item.status === "Created"
                      ? "text-[#0D894F]"
                      : item.status === "Submitted"
                          ? "text-[#BD00FF]"
                        : item.status === "Update"
                          ? "text-[#0047FF]"
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
    </div>
    </div>
  )
}

export default ListenerManagementTable