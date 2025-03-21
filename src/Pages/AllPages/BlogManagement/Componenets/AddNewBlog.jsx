import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import images from 'assets';
import { FiPlus } from 'react-icons/fi';
import { RiDeleteBin6Line } from "react-icons/ri";
import { use } from 'react'
import SucessfullPopup from 'Components/SucessfullPopup'
import axios from 'axios'
import API_ENDPOINTS from 'Configs/Endpoints'





function AddNewBlog() {
     const [uploadedImage, setUploadedImage] = useState(null);
     const [imageName, setImageName] = useState(""); // State to store the uploaded file name
     const [sections, setSections] = useState([]);
     const[showPopup,setShowPopup]=useState()
    
     const [blogTitle, setBlogTitle] = useState("");
     const [blogTag, setBlogTag] = useState("");
     const [blogDescription, setBlogDescription] = useState("");

      const addSection = () => {
        setSections([...sections, { heading: "", brief: "" }]);
      };
   
     const removeSection = (index) => {
       setSections(sections.filter((_, i) => i !== index));
     };


    //   const [submitted, setSubmitted] = useState(false)
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setUploadedImage(reader.result); // Set the uploaded image's data URL
            setImageName(file.name); // Store the file name

          };
          reader.readAsDataURL(file); // Convert the file into a data URL
        }
      };




     const handleUploadBlog = async () => {
       try {
         const token = localStorage.getItem("authToken");
         if (!token) {
           console.error("No token found");
           return;
         }

         const blogData = {
           title: blogTitle,
           tag: blogTag,
           description: blogDescription,
           additionalSections: sections,
           blogThumbnail: uploadedImage,
         };

         await axios.post(API_ENDPOINTS.createBlog, blogData, {
           headers: { Authorization: `Bearer ${token}` },
         });

         setShowPopup(true);
       } catch (error) {
         console.error("Error uploading blog:", error);
       }
     };

     console.log("sections",sections)
  return (
    <div>
      {" "}
      <div className="flex overflow-y-auto h-screen bg-[#F0F0F0]">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Adminheader />
          <div className="addnewlistener overflow-y-auto h-screen">
            <div className="">
              {/* Headings */}
              <div className="headings px-7 pt-7 flex flex-col justify-start ">
                <h1 className="text-[32px]">Blog Management</h1>
                <div className="flex gap-2 my-2">
                  <div className="dashboard flex justify-start items-center gap-1">
                    <div className="text-[#808080]">Dashboard</div>{" "}
                    <IoIosArrowForward className="text-[#808080]" />
                  </div>
                  <Link
                    to="/BlogManagement"
                    className="dashboard cursor-pointer flex justify-start items-center gap-1"
                  >
                    <div className="text-[#808080]">Blog Management</div>{" "}
                    <IoIosArrowForward className="text-[#808080]" />
                  </Link>
                  <div className="listener text-[16px]">Add new Blog</div>
                </div>
              </div>
              <div className="flex px-7 py-4 gap-7">
                <div className=" w-[75%] flex flex-col">
                  {/* Blog Details */}
                  <div className=" rounded-[24px] bg-white px-[40px] py-[30px]">
                    <h2 className="text-[24px] mb-5 ">Blog Details</h2>
                    <div className="flex flex-col gap-[24px]">
                      <div className="Blog Title">
                        <h3 className="text-[18px] my-1">Blog Title</h3>
                        <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                          {" "}
                          <input
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                            placeholder=" Enter Title"
                            className="w-full outline-none bg-transparent"
                            type="text"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                      <div className="Tag for the Blog">
                        <h3 className="text-[18px] my-1">Tag for the Blog </h3>
                        <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                          {" "}
                          <input
                            placeholder="Enter Tag"
                            className="w-full outline-none bg-transparent"
                            type="text"
                            name=""
                            id=""
                            value={blogTag}
                            onChange={(e) => setBlogTag(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Brief */}
                  <div className=" rounded-[24px] my-10 bg-white px-[40px] py-[30px]">
                    <h2 className="text-[24px] mb-5 ">Brief </h2>
                    <div className="flex flex-col gap-[24px]">
                      <div className="Email ID">
                        <h3 className="text-[18px] my-1">Description </h3>
                        <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                          <textarea
                            rows={1}
                            value={blogDescription}
                            onChange={(e) => setBlogDescription(e.target.value)}
                            placeholder="Enter Description "
                            className="w-full outline-none bg-transparent"
                            onInput={(e) => {
                              e.target.style.height = "auto"; // Reset height
                              e.target.style.height =
                                e.target.scrollHeight + "px"; // Set to new height
                            }}
                            type="text"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Dynamically added sections */}
                  {sections.map((section, index) => (
                    <div
                      key={section.id}
                      className="rounded-[24px] mb-7 flex flex-col gap-7 bg-white px-[40px] py-[30px]"
                    >
                      <div>
                        <h3 className="text-[18px] my-1">Heading</h3>
                        <div className="w-full border border-[#808080] py-2 px-3 rounded-[12px]">
                          <input
                            placeholder="Enter Title"
                            className="w-full outline-none bg-transparent"
                            type="text"
                            value={section.heading}
                            onChange={(e) => {
                              const updatedSections = [...sections];
                              updatedSections[index].heading = e.target.value;
                              setSections(updatedSections);
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px]">
                        <div>
                          <h3 className="text-[18px] my-1">Brief</h3>
                          <div className="w-full border border-[#808080] py-2 px-3 rounded-[12px]">
                            <textarea
                              rows={1}
                              value={section.brief}
                              onChange={(e) => {
                                const updatedSections = [...sections];
                                updatedSections[index].brief = e.target.value;
                                setSections(updatedSections);
                              }}
                              placeholder="Enter Description"
                              className="w-full outline-none bg-transparent"
                              onInput={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height =
                                  e.target.scrollHeight + "px";
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="bg-[#EB5757] w-fit p-3 rounded-[4px] text-white"
                        onClick={() => removeSection(index)}
                      >
                        <RiDeleteBin6Line className="text-[20px]" />
                      </button>
                    </div>
                  ))}

                  {/* Add Description Button */}
                  <div className="self-end mb-7">
                    <button
                      className="text-[18px] bg-[#808080] py-[12px] px-[16px] rounded-[8px] flex items-center gap-2 text-white"
                      onClick={addSection}
                    >
                      <FiPlus />
                      Add Description
                    </button>
                  </div>
                </div>
                {/* Payment Screenshot */}
                <div className="w-[25%] gap-[30px] px-[20px] flex flex-col justify-center items-center h-fit py-[30px] bg-white rounded-[24px]">
                  <h3 className="text-[20px]">Payment Screenshot</h3>
                  <div
                    className={` ${
                      uploadedImage ? "border-[1px] border-black " : ""
                    }rounded-[16px]`}
                  >
                    <img
                      src={uploadedImage || images.AddScreenshotBg} // Use uploaded image or fallback
                      alt="Screenshot placeholder"
                      className="w-[200px] h-[200px] object-contain"
                    />
                  </div>
                  <span className="text-center">
                    {imageName
                      ? imageName
                      : "Drag and drop image here or click add image"}
                  </span>
                  <label className="bg-[#3A3A3A] font-sans rounded-[8px] px-[16px] py-[12px] text-white text-[18px] cursor-pointer">
                    {uploadedImage ? "Replace" : "Add"} Screenshot
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden outline-none bg-transparent"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              {/* Button */}

              <div className="bg-white flex justify-end  border-t-[1px] py-3 border-[#808080]">
                <button
                  className="text-[18px] text-black mr-7 px-6 py-2 border-[1px] border-black rounded-[8px]"
                  type="button"
                >
                  {" "}
                  Discard{" "}
                </button>
                <button
                  onClick={handleUploadBlog}
                  className="text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]"
                  type="button"
                >
                  Upload Blog{" "}
                </button>
                {showPopup && (
                  <SucessfullPopup
                    text={"Upload Successfully!"}
                    setShowPopup={setShowPopup}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewBlog