import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import SucessfullPopup from 'Components/SucessfullPopup'
import React from 'react'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

function AddNewListener() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className='flex h-screen bg-[#F0F0F0]'>
            <Sidebar />
            <div className="w-full flex flex-col">
                <Adminheader />
                <div className='addnewlistener overflow-y-auto h-screen'>

                
                <div className=" p-7">
                    {/* Headings */}
                    <div className="headings flex justify-between items-center">
                        <div className='left'>
                            <h1 className='text-[32px]'>Listener Management</h1>
                            <div className='flex gap-2 my-2'>
                                <div className='dashboard flex justify-start items-center gap-1'>
                                    <div className="text-[#808080]">Dashboard</div> <IoIosArrowForward className='text-[#808080]' />
                                </div>
                                <Link to="/ListenerManagement" className='dashboard cursor-pointer flex justify-start items-center gap-1'>
                                    <div className="text-[#808080]">Listener Management</div> <IoIosArrowForward className='text-[#808080]' />
                                </Link>
                                <div className="listener text-[16px]">Add New Listener</div>
                            </div>
                        </div>
                    </div>

                    {/* Data */}
                    <div className="bottom flex gap-7 py-8">

                        <div className=' left w-3/4'>
                            {/* Inputs */}
                            <div className="inputs mb-8 flex flex-col gap-8 rounded-[24px] bg-white px-[40px] py-[45px]">
                                <div className="email">
                                    <span className='text-[18px]'>Email ID</span>
                                    <div className='border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]'>
                                        <input className='text-[18px] w-full outline-none bg-transparent' placeholder='Enter Email ID' type="text" />
                                    </div>
                                </div>
                                <div className="password">
                                    <span className='text-[18px]'>Password</span>
                                    <div className='border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]'>
                                        <input className='text-[18px] w-full bg-transparent outline-none' placeholder='Enter Password' type="password" />
                                    </div>
                                </div>
                            </div>

                            {/* Mail */}

                            <div className="inputs flex flex-col gap-8 rounded-[24px] bg-white px-[40px] py-[45px]">
                                <div className="mail-subject">
                                    <span className='text-[18px]'>Mail Subject</span>
                                    <div className='border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]'>
                                        <div className='text-[18px] w-full h-auto'> Invitation to Join as a Listener on My Hear Space </div>
                                    </div>
                                </div>
                                <div className="Mail Body">
                                    <span className='text-[18px]'>Mail Body</span>
                                    <div className='border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]'>
                                        <pre className='text-[18px] w-full font-sans whitespace-pre-wrap'>
                                            {`We’re thrilled to invite you to join My Hear Space, a platform dedicated to providing support and comfort to individuals dealing with challenges like loneliness, anxiety, and more. As someone with a passion for listening and helping others, we believe you’d be an incredible addition to our community of empathetic listeners.

Why Join Us?
Connect with individuals seeking a listening ear and make a real difference.
Flexible opportunities to share your time and compassion.
Be part of a supportive network that values emotional well-being.

Once registered, our team will review your application and provide the next steps to activate your profile.

Feel free to reply to this email if you have any questions. We can’t wait to have you on board and make a meaningful impact together!

Warm regards,
The My Hear Space Team`}
                                        </pre>
                                    </div>
                                </div>

                            </div>

                       
                        </div>
                        {/* Links */}
                        <div className="right w-1/4">
                            <div className=" mb-8  rounded-[24px] bg-white px-[40px] py-[45px]">
                                <div className="playstore">
                                <span className='text-[18px]'>Play store Link</span>
                                <div className='border-[1px] mt-2 [50%] border-[#808080] px-4 py-2 rounded-[8px]'>https://play.google <br />.com/store/apps/details?id=com.bigwinepot<br />.nwdn.internationalk </div>
                                </div>
                                <div className="playstore mt-10">
                                <span className='text-[18px]'>Apple Store Link</span>
                                <div className='border-[1px] mt-2 [50%] border-[#808080] px-4 py-2 rounded-[8px]'>https://play.google <br />.com/store/apps/details?id=com.bigwinepot<br />.nwdn.internationalk </div>
                                </div>

                              


                            </div>
                        </div>
                    </div>
                 
                </div>
                   {/* Button */}
                   <div  className='bg-white flex justify-end  border-t-[1px] py-3 border-[#808080]'>
<button onClick={()=>{
    setShowPopup(true)
}}  className='text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]' type="button">Submit Email</button>
                    </div>
                   { showPopup && <SucessfullPopup text={"Mail Submitted"} setShowPopup={setShowPopup}/> } 
                    </div>
            </div>
        </div>
    )
}

export default AddNewListener
