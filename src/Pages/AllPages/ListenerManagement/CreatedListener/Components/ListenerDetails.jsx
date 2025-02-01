import images from 'assets';
import React, { useState } from 'react'

function ListenerDetails() {
  const [gender, setGender] = useState('Male'); // Default gender is Male

  return (
    <>
    <div className='flex px-7 py-4 gap-7'>
    <div className=' w-[75%] flex flex-col'>
      <div className=' rounded-[24px] bg-white px-[40px] py-[30px]'>
        <h2 className="text-[24px] mb-5 ">Profile Details</h2>
        <div className='flex flex-col gap-[24px]'>
          <div className="gender ">
            <h3 className='text-[18px] my-1'>Gender</h3>
            <div className="flex gap-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
            </div>

          </div>
          <div className="name">
            <h3 className='text-[18px] my-1'>Name</h3>
            <div className='w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]'> <input placeholder='Mohit Asnani' className='w-full' type="text" name="" id="" /></div>
          </div>
          <div className="Age">
            <h3 className='text-[18px] my-1'>Age ( in years )</h3>
            <div className='w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]'> <input placeholder='23' className='w-full' type="text" name="" id="" /></div>
          </div>
          <div className="Language">
            <h3 className='text-[18px] my-1'>Languages you can speak</h3>
            <div className="buttons flex  gap-[12px]">
              <div className=' w-fit border-[1px] border-[#808080]  py-2 px-[24px] rounded-[12px]'>Hindi</div>
              <div className=' w-fit border-[1px] border-[#808080]  py-2 px-[24px] rounded-[12px]'>English</div>
              <div className=' w-fit border-[1px] border-[#808080]  py-2 px-[24px] rounded-[12px]'>Tamil</div>
            </div>
          </div>
          <div className="bio">
            <h3 className='text-[18px] my-1 font-500'>A short Bio</h3>
            <div className="buttons flex  gap-[12px]">
           
              <textarea 
                 rows={1} 
                  placeholder='Enter Description '
                   className='w-full  border-[1px] font-400 border-[#808080]  py-2 px-[12px] rounded-[12px] outline-none bg-transparent' 
                   onInput={(e) => {
                    e.target.style.height = 'auto'; // Reset height
                    e.target.style.height = e.target.scrollHeight + 'px'; // Set to new height
                  }}
                   type="text"
                    name=""
                     id="" />
              
            </div>
          </div>
          <div className="available">
            <h3 className='text-[18px] my-1 font-500'>You are available for </h3>
            <div className='flex gap-11'>
              <div className='flex justify-start items-center gap-3'><input className='w-5 h-5' type="checkbox" />Chat</div>
              <div className='flex justify-start items-center gap-3'><input className='w-5 h-5' type="checkbox" />Phone Call</div>
              <div className='flex justify-start items-center gap-3'><input className='w-5 h-5' type="checkbox" />Video Call</div>
            </div>


          </div>

        </div>
      </div>
      <div className=' rounded-[24px] my-10 bg-white px-[40px] py-[30px]'>
        <h2 className="text-[24px] mb-5 ">Contact Details</h2>
        <div className='flex flex-col gap-[24px]'>
          <div className="Email ID">
            <h3 className='text-[18px] my-1'>Email ID</h3>
            <div className='w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]'> <input placeholder='Mohit Asnani' className='w-full' type="text" name="" id="" /></div>
          </div>
          <div className="Email ID">
            <h3 className='text-[18px] my-1'>Email ID</h3>
            <div className='w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]'> <input placeholder='Mohit Asnani' className='w-full' type="text" name="" id="" /></div>
          </div>
          <div className="Email ID">
            <h3 className='text-[18px] my-1'>Email ID</h3>
            <div className='w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]'> <input placeholder='Mohit Asnani' className='w-full' type="text" name="" id="" /></div>
          </div>


        </div>
      </div>
    </div>
    <div className="right w-[25%] h-fit py-[40px] gap-[40px] flex flex-col items-center bg-white rounded-[24px]">
      <img className='w-[180px] self-center rounded-full border-2 border-black' src={images.profile1} alt="" />
  <button className='px-[16px] w-fit rounded-[8px] text-white self-center py-[12px] bg-[#d9d9d9]'>Change Image</button>
    </div>
    </div>
    {/* Button */}

<div  className='bg-white flex justify-end  border-t-[1px] py-3 border-[#808080]'>
<button className='text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]' type="button">Edit Email</button>

                    </div>
    </>

  )
}

export default ListenerDetails