import Adminheader from 'Components/Adminheader';
import Sidebar from 'Components/Sidebar';
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { GoStarFill } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeletePopup from 'Components/DeletePopup';
import axios from 'axios';
import API_ENDPOINTS from 'Configs/Endpoints';
import { toast } from 'react-toastify';


function BlogManagement() {
    const [showPopup, setShowPopup] = useState()
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [blogsData, setBlogsData] = useState([])
    const navigate = useNavigate();



    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Number of rows per page

    // Calculate the indices for slicing the table data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogsData.slice(indexOfFirstItem, indexOfLastItem);

    // Total number of pages
    const totalPages = Math.ceil(blogsData.length / itemsPerPage);

    // Handle Back button click
    const handleBack = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    // Handle Next button click
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };


    const handleDelete = (index) => {
        
        setShowPopup(true);
        setDeleteIndex(index);


     
    };

  const DeleteBlog = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.delete(
        `${API_ENDPOINTS.deleteBlog}${deleteIndex}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Blog Deleted Successfully")
        setShowPopup(false);
        setDeleteIndex(null);
        getBlogs();
    } catch (error) {
      console.error("Error fetching listeners:", error);
      // setFeedbacks([]); // Fallback to empty array in case of error
    }
  };
 


    const getBlogs = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(`${API_ENDPOINTS.getAllBlogs}`, {
          headers: { Authorization: `Bearer ${token}` },
        //   params: { minRating },
        });

        // Ensure response contains data before updating state
        if (response.data && Array.isArray(response.data.blogs)) {
            setBlogsData(response.data.blogs)
          //   setFeedbacks(response.data); // Update state with correct array
        } else {
          console.error("Invalid response format:", response.data);
          //   setFeedbacks([]); // Fallback to an empty array to prevent errors
        }
      } catch (error) {
        console.error("Error fetching listeners:", error);
        // setFeedbacks([]); // Fallback to empty array in case of error
      }
    };
  

    useEffect(() => {
      getBlogs();
    }, []);
    return (
      <div>
        <div>
          <div className="flex h-screen bg-[#F0F0F0]">
            <Sidebar />
            <div className=" w-full  flex flex-col">
              <Adminheader />
              <div className="p-7  6 overflow-y-auto h-screen scrollbar-none">
                {/* headings */}
                <div className="headings flex justify-between items-center">
                  <div className="left">
                    <h1 className="text-[32px]">Blog Management</h1>
                    <div className="flex gap-2 my-2">
                      <div className=" dashbaord flex justify-start items-center gap-1">
                        <Link to="/Dashboard" className=" text-[#808080]">
                          Dashboard
                        </Link>{" "}
                        <IoIosArrowForward className="text-[#808080]" />
                      </div>
                      <div className="listener text-[16px]">
                        Blog Management{" "}
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/BlogManagement/AddNewBlog"
                    className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit"
                  >
                    <FiPlus /> Add New Blog
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
                          className="border-b-[1px] border-[#D9D9D9]"
                        >
                          <td className="p-3">
                            {index + 1 + (currentPage - 1) * itemsPerPage}
                          </td>
                          <td className="p-3">{item.title}</td>

                          <td className="p-3">{item.tag} </td>
                          <td className="p-3">
                            {" "}
                            <div className="flex gap-2">
                              <Link
                                to="/BlogManagement/EditBlog"
                                state={{ item }}
                                className="bg-[#808080] text-white px-[16px] py-[4px] text-[22px] w-fit rounded-[8px]"
                              >
                                {" "}
                                <GoPencil />{" "}
                              </Link>
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="border-[1px] border-[#FF5D5D] text-[#FF5D5D] px-[16px] py-[4px] text-[22px] w-fit rounded-[8px]"
                              >
                                {" "}
                                <RiDeleteBin6Line />{" "}
                              </button>
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
            {/* {showPopup && <DeletePopup text={"Are you sure you want to delete this Blog?"} setShowPopup={setShowPopup} />} */}
            {showPopup && (
              <DeletePopup
                setShowPopup={setShowPopup}
                text={"Are you sure you want to delete this Blog?"}
                confirmDelete={DeleteBlog}
              />
            )}
          </div>
        </div>
      </div>
    );
}

export default BlogManagement