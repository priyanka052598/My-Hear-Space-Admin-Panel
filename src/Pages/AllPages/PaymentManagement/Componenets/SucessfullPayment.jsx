import images from 'assets'
import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

function SucessfullPayment() {
    return (
        <div>  <div className='flex h-screen bg-[#F0F0F0]'>
            <Sidebar />
            <div className="w-full flex flex-col">
                <Adminheader />
                <div className='addnewlistener overflow-y-auto h-screen'>


                    <div className=" p-7">
                        {/* Headings */}
                        <div className="headings  items-center">
                            <h1 className='text-[32px]'>Payment Management</h1>
                            <div className='flex gap-2 my-2'>
                                <div className='dashboard flex justify-start items-center gap-1'>
                                    <div className="text-[#808080]">Dashboard</div> <IoIosArrowForward className='text-[#808080]' />
                                </div>
                                <Link to="/PaymentManagement" className='dashboard cursor-pointer flex justify-start items-center gap-1'>
                                    <div className="text-[#808080]">Payment Management</div> <IoIosArrowForward className='text-[#808080]' />
                                </Link>
                                <div className="listener text-[16px]">Payment Details</div>
                            </div>
                        </div>
                        <div className='flex gap-7 py-10'>
                        <div className='w-[75%] flex flex-col gap-7 '>
                        {/* Details */}
                        <div className="  flex flex-col rounded-[24px] bg-white px-[40px] py-[30px] ">
                            <h2 className="text-[20px] mb-5">Details</h2>



                            <div

                                className="grid grid-cols-[250px_1fr] gap-0 text-left border border-gray-300"
                            >
                                {/* Left Column - Field Names */}
                                <div className="font-600 text-black  border-r border-gray-300">
                                    <div className="px-4 py-3 border-b">Status</div>
                                    <div className="px-4 py-3 border-b">Date of Request</div>
                                    <div className="px-4 py-3 border-b">Listener Name</div>
                                    <div className="px-4 py-3 border-b">UPI ID</div>
                                    <div className="px-4 py-3 border-b">Account Holder’s Name</div>
                                    <div className="px-4 py-3">Linked Number</div>
                                </div>
                                {/* Right Column - Data */}
                                <div className="text-gray-900">
                                    <div className="px-4 py-3 border-b text-[#0D894F]">Successful</div>
                                    <div className="px-4 py-3 border-b">10/12/24</div>
                                    <div className="px-4 py-3 border-b">Mohit Asnani</div>
                                    <div className="px-4 py-3 border-b">mohitasnani0987@okaxis</div>
                                    <div className="px-4 py-3 border-b">Mohit Asnani</div>
                                    <div className="px-4 py-3"> 8141136998</div>
                                </div>


                            </div>
                        </div>
                        {/* Payment Details */}

                        <div className="  flex flex-col rounded-[24px] bg-white px-[40px] py-[30px] ">
                            <h2 className="text-[20px] mb-5">Payment Details</h2>



                            <div

                                className="grid grid-cols-[250px_1fr] gap-0 text-left border border-gray-300"
                            >
                                {/* Left Column - Field Names */}
                                <div className="font-600 text-black  border-r border-gray-300">
                                    <div className="px-4 py-3 border-b">Requested Amount (₹)</div>
                                    <div className="px-4 py-3 border-b">Commission (%) </div>
                                    <div className="px-4 py-3 border-b">Amount to Pay ($)</div>
                                </div>
                                {/* Right Column - Data */}
                                <div className="text-gray-900">
                                    <div className="px-4 py-3 border-b">1200</div>
                                    <div className="px-4 py-3 border-b">10</div>
                                    <div className="px-4 py-3 border-b">1800</div>
                                </div>


                            </div>
                        </div>
                    
                        </div>
                        {/* Payment Screenshot */}
                        <div className='w-[25%] gap-[30px] px-[20px] flex flex-col justify-center items-center h-fit py-[30px] bg-white rounded-[24px]'>
<h3 className='text-[20px]'>Payment Screenshot</h3>
<img src={images.screnshot} alt="" />
<span className='text-center'>payment screenshot_mohit asnani.jpg</span>
    <button className='bg-[#3A3A3A]  font-sans rounded-[8px] px-[16px] py-[12px] text-white text-[18px]' type="button">Download Image</button>
                        </div>
                        </div>
                       
                      
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SucessfullPayment