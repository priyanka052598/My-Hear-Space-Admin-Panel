import React from 'react'
import images from 'assets'


function DeletePopup({setShowPopup,text,confirmDelete}) {
  return (
    <div className='absolute h-full w-full top-0 left-0 right-0 bg-[rgb(0,0,0,0.8)] flex justify-center items-center'>
        <div className=' bg-white px-7 gap-7 flex flex-col  justify-center items-center w-[23%] h-[460px] rounded-[24px]'>
        <div className="iamge w-[70%]">
        <img className=' ' src={images.deletepopup} alt="" />

        </div>
        <span className='text-[28px] text-center'>{text}</span>
        <div className='flex w-full gap-3'>
        <button onClick={()=>{
            setShowPopup(false)
        }} className='text-black rounded-[12px] w-1/2 py-2 text-[24px]  border-[1px] border-black' type="button">Cancel</button>
        <button onClick={confirmDelete} className=' rounded-[12px] w-1/2 py-2 text-[24px] text-white bg-[#FF5D5D]' type="button">Delete</button>
        </div>
 
        </div>
    </div>
  )
}

export default DeletePopup