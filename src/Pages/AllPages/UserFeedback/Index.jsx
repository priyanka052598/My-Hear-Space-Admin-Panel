import axios from 'axios';
import Adminheader from 'Components/Adminheader';
import Sidebar from 'Components/Sidebar';
import React, { useEffect, useState } from 'react'
import { GoStarFill } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

function UserFeedback() {
const navigate = useNavigate();
const serverUrl = import.meta.env.VITE_SERVER_URL;
const [feedbacks, setFeedbacks] = useState([   {
    timestamp: "10/12/24",
    phone: "6355806885",
    rating: "4.3",
    experienceWord: "Great!",
    review: "This app has been a lifesaver! Being able to talk to a caring listener anytime has really helped me feel supported during tough times.",
},])
const [minRating, setMinRating] = useState(1);  // Default is 1 star


const getListeners = async () => {
    try {
        const token = localStorage.getItem("authToken");
        
        if (!token) {
            console.error("No token found");
            return;
        }

        const response = await axios.get(`${serverUrl}feedback/all`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { minRating }
        });

        // Ensure response contains data before updating state
        if (response.data && Array.isArray(response.data)) {
            setFeedbacks(response.data); // Update state with correct array
        } else {
            console.error("Invalid response format:", response.data);
            setFeedbacks([]); // Fallback to an empty array to prevent errors
        }
    } catch (error) {
        console.error("Error fetching listeners:", error);
        setFeedbacks([]); // Fallback to empty array in case of error
    }
};



 useEffect(() => {
    getListeners();
  }, []);

  useEffect(() => {
    getListeners();
}, [minRating]);  // Fetch data when minRating updates

   

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Number of rows per page

    // Calculate the indices for slicing the table data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = feedbacks?.slice(indexOfFirstItem, indexOfLastItem);

    // Total number of pages
    const totalPages = Math.ceil(feedbacks?.length / itemsPerPage);

    // Handle Back button click
    const handleBack = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    // Handle Next button click
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };


    const handleRatingChange = (event) => {
        const selectedRating = event.target.value;
        setMinRating(selectedRating);  // Update state
    };
    



    return (
        <div>  <div className='flex h-screen bg-[#F0F0F0]'>
            <Sidebar />
            <div className=" w-full  flex flex-col">
                <Adminheader />
                <div className='p-7  6 overflow-y-auto h-screen scrollbar-none'>
                    {/* headings */}
                    <div className="headings flex justify-between items-center">
                        <div className='left'>
                            <h1 className='text-[32px]'>User Feedbacks</h1>
                            <div className='flex gap-2 my-2'>
                                <div className=' dashbaord flex justify-start items-center gap-1'>
                                    <Link to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
                                </div>
                                <div className="listener text-[16px]">
                                    User Feedbacks
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* inputs */}
                    <div className='w-full flex justify-end my-4 '>


                        <div className="sortbyrating flex justify-end  items-center gap-3  w-1/3">
                            <span className='text-[16px] '>Sort by Rating</span>
                            <div className=' py-2 px-3 bg-white rounded-[8px] border-[1px] border-[#808080]'>
                            <select className="pr-12 border-white outline-none" onChange={handleRatingChange}>
    <option value="1">1 Star and above</option>
    <option value="2">2 Stars and above</option>
    <option value="3">3 Stars and above</option>
    <option value="4">4 Stars and above</option>
    <option value="5">Only 5 Stars</option>
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
                                    <th className="p-3">Phone Number</th>
                                    <th className="p-3">Rating</th>
                                    <th className="p-3">One word Experience</th>
                                    <th className="p-3">Review</th>

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
                                        <td className="p-3">{item.timestamp.slice(0, 10)}</td>
                                        <td className="p-3">{item.phone}</td>
                                        <td className="p-3 align-middle">
                                            <div className="flex items-center gap-1">
                                                {item.rating} <GoStarFill />
                                            </div>
                                        </td>
                                        <td className="p-3">{item.experienceWord} </td>
                                        <td className="p-3 w-1/2">{item.review}</td>


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
        </div>
    )
}

export default UserFeedback