import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import images from 'assets'
import SucessfullPopup from 'Components/SucessfullPopup'
import { Link } from 'react-router-dom'


function BannerManagement() {
      const[activeTab,setActiveTab]=useState("Login Screen")
      const [uploadImage, setUploadImage] = useState(null)
      const [isEditing, setIsEditing] = useState(false);
      const [isUpdated, setIsUpdated] = useState(false);
      const [showPopup, setShowPopup] = useState(false);
      const [banners, setBanners] = useState([
        {
        img:images.profile1,
        heading:"Banner 1",
        size:"390*330 ",
        isPreview:false,
        id:1
 },
        {
        img:images.profile1,
        heading:"Banner 1",
        size:"390*330 ",
        isPreview:false,
        id:2


 },
        {
        img:images.profile1,
        heading:"Banner 1",
        size:"390*330 ",
        isPreview:false,
        id:3

 },
])



      const handleEditClick = () => {
        setIsEditing(true);
      };
    
      const handleCancelClick = () => {
        setIsEditing(false);
        setUploadImage(null);
        setIsUpdated(false);

      };
    
      const handleImageChange = (event, id) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
      
          setBanners((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, img: imageUrl } : item
            )
          );
      
          setUploadImage(imageUrl);
          setIsUpdated(true); // Enable the "Update Changes" button
        }
      };

const handleUpdateClick = () => {
    setIsEditing(false);
    setUploadImage(null);
    setShowPopup(true)
  };
    

      let Tabs=[
        "Login Screen", "Home Screen"
      ];
     
      
  
  return (
     <div className='flex h-screen bg-[#F0F0F0]'>
            <Sidebar />
            <div className=" w-full  h-screen flex flex-col">
                <Adminheader />
                {/* Left */}
                <div className='p-7 flex gap-7 overflow-y-auto  h-screen scrollbar-none'>
                    {/* headings */}
                    <div className='w-3/5 '>
                    <div className="headings flex flex-col ">
                            <h1 className='text-[32px]'>Banner Management</h1>
                            <div className='flex gap-2 my-2'>
                                <div className=' dashbaord flex justify-start items-center gap-1'>
                                    <Link to="/Dashboard" className=" text-[#808080]">Dashboard</Link> <IoIosArrowForward className='text-[#808080]' />
                                </div>
                                <div className="listener text-[16px]">
                                Banner Management                        </div>
    </div>
    </div>
    {/* Tabs and data */}
     <div className=' w-[45%]  p-2 my-4 flex justify-between  bg-[#3A3A3A] rounded-[12px]'>
{
    Tabs.map((item)=>{
        return <div onClick={()=>{
            setActiveTab(item)
        }} className={`px-4 py-1  text-center  cursor-pointer rounded-[8px] ${activeTab==item? "bg-white text-black" : "text-white bg-[#3A3A3A]"}`}  >{item}</div>
    })
}
                                   </div>
    {activeTab=="Login Screen" &&
        
        <div className='w-full pb-16 flex flex-col gap-7 '>
        {
            banners.map((item)=>{
                return <div className='w-full h-[200px] rounded-[16px] flex gap-[40px]  bg-white p-[24px]'>
                    <div className='w-1/4 h-[152px]  items-center '>
                    <img className='rounded-[12px] w-full h-full object-cover' src={item.img} alt='' />

                    </div>
                <div className='flex flex-col justify-between'>
                    <div className='w-3/4  '>
                        <h2 className='text-[20px]'>{item.heading}</h2>
                        <span className='text-[#808080] text-[16px]'> Size -{item.size}pixels</span>
                        </div>
                        {/* <div className="btns flex gap-[16px]">
                            <button className='text-[#D9D9D9] border-[1px] border-[#D9D9D9] py-[8px] px-[24px] rounded-[8px]'>Preview</button>
                            <button className='text-white  bg-[#D9D9D9] py-[8px] px-[24px] rounded-[8px]'>Replace</button>

                        </div> */}

{isEditing ? (
                        <div className='btns flex gap-[16px]'>
                          <button className='text-black border border-black py-[8px] px-[24px] rounded-[8px]'>Preview</button>
                          <label className='text-white text-center bg-[#3A3A3A] py-[8px] px-[24px] rounded-[8px] cursor-pointer'>
                          Replace Banner
                            <input type='file'  className='hidden' onChange={(e)=>{
                                handleImageChange(e,item.id)
                            }} />
                          </label>
                        </div>
                      ) :( <div className='btns flex gap-[16px]'>
                        <button className='text-[#D9D9D9] border border-[#D9D9D9] py-[8px] px-[24px] rounded-[8px]'>Preview</button>
                        <label className='text-white bg-[#D9D9D9] py-[8px] px-[24px] rounded-[8px] cursor-pointer'>
                        Replace Banner
                        </label>
                      </div>)}
                </div>
                </div>
            })
        }

      
           
            

            
      </div>}
                    </div>
                    {/* Preview */}
                    <div className='w-2/5 p-7 flex flex-col h-full gap-5 justify-center items-center rounded-[24px] bg-white'>
            <h2 className='text-[24px]  '>Preview</h2>
            <div className=' flex justify-center h-[400px] items-center  w-full '>
            {uploadImage ? <img src={uploadImage} className='w-full h-[400px]  object-cover rounded-[12px]' alt='Preview' /> : 'No banner to preview yet.'}
            </div>

            

            </div>
    


    </div>
        {/* Button */}

<div  className='bg-white  flex justify-end  border-t-[1px] py-3 border-[#808080]'>
{isEditing ? (
            <>
              <button onClick={handleCancelClick} className='text-[18px] text-black mr-4 px-6 py-2 border-[1px] border-black rounded-[8px]'>Cancel</button>
              <button  onClick={handleUpdateClick}
              className={`text-[18px] text-white mr-7 px-6 py-2 ${isUpdated ? 'bg-[#3A3A3A]' : 'bg-[#D9D9D9]'} rounded-[8px]`} disabled={!isUpdated}>Update Changes</button>

              {/* <button className='text-[18px] text-white mr-7 px-6 py-2 bg-[#D9D9D9] rounded-[8px]'>Update Changes</button> */}
            </>
          ) : (
            <button onClick={handleEditClick} className='text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]'>Edit Banner</button>
          )}
{/* <button  className='text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]' type="button"> Edit Banner</button> */}

                    </div>

    </div>
    {showPopup && <SucessfullPopup text={"Submit Successfully!"} setShowPopup={setShowPopup} />}

    </div>
  )
}

export default BannerManagement