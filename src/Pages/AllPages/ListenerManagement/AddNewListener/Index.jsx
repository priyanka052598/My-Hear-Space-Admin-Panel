import axios from 'axios'
import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import SucessfullPopup from 'Components/SucessfullPopup'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

function AddNewListener() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailSubject = "Invitation to Join as a Listener on My Hear Space"
    const emailContent = `We’re thrilled to invite you to join My Hear Space, a platform dedicated to providing support and comfort to individuals dealing with challenges like loneliness, anxiety, and more...`

    const serverUrl = import.meta.env.VITE_SERVER_URL;

    const Add0Listener = async () => {
        try {
            const token = localStorage.getItem("authToken");

            if (!token) {
                console.error("No token found");
                return;
            }

            const response = await axios.post(
                `${serverUrl}admins/listeners/create`, // Fixed double slash
                { email, password, emailSubject, emailContent },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response) {
                navigate(
                    "/ListenerManagement"
                )              
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Error creating listener:", error);
        }
    };

    return (
        <div className="flex h-screen bg-[#F0F0F0]">
            <Sidebar />
            <div className="w-full flex flex-col">
                <Adminheader />
                <div className="addnewlistener overflow-y-auto h-screen">
                    <div className="p-7">
                        {/* Headings */}
                        <div className="headings flex justify-between items-center">
                            <div className="left">
                                <h1 className="text-[32px]">Listener Management</h1>
                                <div className="flex gap-2 my-2">
                                    <div className="dashboard flex items-center gap-1 text-[#808080]">
                                        Dashboard <IoIosArrowForward />
                                    </div>
                                    <Link to="/ListenerManagement" className="dashboard flex items-center gap-1 text-[#808080]">
                                        Listener Management <IoIosArrowForward />
                                    </Link>
                                    <div className="listener text-[16px]">Add New Listener</div>
                                </div>
                            </div>
                        </div>

                        {/* Data */}
                        <div className="bottom flex gap-7 py-8">
                            <div className="left w-3/4">
                                {/* Inputs */}
                                <div className="inputs mb-8 flex flex-col gap-8 rounded-[24px] bg-white px-[40px] py-[45px]">
                                    <div className="email">
                                        <span className="text-[18px]">Email ID</span>
                                        <div className="border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]">
                                            <input
                                                className="text-[18px] w-full outline-none bg-transparent"
                                                placeholder="Enter Email ID"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="password">
                                        <span className="text-[18px]">Password</span>
                                        <div className="border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]">
                                            <input
                                                className="text-[18px] w-full bg-transparent outline-none"
                                                placeholder="Enter Password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Mail */}
                                <div className="inputs flex flex-col gap-8 rounded-[24px] bg-white px-[40px] py-[45px]">
                                    <div className="mail-subject">
                                        <span className="text-[18px]">Mail Subject</span>
                                        <div className="border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]">
                                            <div className="text-[18px] w-full h-auto">{emailSubject}</div>
                                        </div>
                                    </div>
                                    <div className="mail-body">
                                        <span className="text-[18px]">Mail Body</span>
                                        <div className="border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]">
                                            <pre className="text-[18px] w-full font-sans whitespace-pre-wrap">{emailContent}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="right w-1/4">
                                <div className="mb-8 rounded-[24px] bg-white px-[40px] py-[45px]">
                                    <div className="playstore">
                                        <span className="text-[18px]">Play Store Link</span>
                                        <div className="border-[1px] mt-2 border-[#808080] px-4 py-2 rounded-[8px]">
                                            https://play.google.com
                                            /store/apps/details?id
                                            =com.bigwinepot.nwdn.
                                            internationalk
                                        </div>
                                    </div>
                                    <div className="appstore mt-10">
                                        <span className="text-[18px]">Apple Store Link</span>
                                        <div className="border-[1px]  mt-2 border-[#808080] px-4 py-2 rounded-[8px]">
                                            https://apps.apple.com
                                            /store/apps/details?id=com.
                                            bigwinepot.nwdn.
                                            internationalk
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="bg-white flex justify-end border-t-[1px] py-3 border-[#808080]">
                        <button
                            onClick={Add0Listener} // Fixed function call
                            className="text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]"
                            type="button"
                        >
                            Submit Email
                        </button>
                    </div>

                    {showPopup && <SucessfullPopup text={"Mail Submitted"} setShowPopup={setShowPopup} />}
                </div>
            </div>
        </div>
    );
}

export default AddNewListener;
