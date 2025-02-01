import React from 'react'
import images from 'assets'


function SucessfullPopup({setShowPopup,text}) {
  return (
    <div className='absolute h-full w-full top-0 left-0 right-0 bg-[rgb(0,0,0,0.8)] flex justify-center items-center'>
        <div className=' bg-white px-7 gap-7 flex flex-col  justify-center items-center w-[23%] h-[400px] rounded-[24px]'>
        <div className="iamge w-[70%]">
        <img className=' ' src={images.sucessfull} alt="" />

        </div>
        <span className='text-[28px]'>{text}</span>
        <button onClick={()=>{
            setShowPopup(false)
        }} className='bg-[#3A3A3A] rounded-[12px] w-full py-2 text-[24px] text-white' type="button">Okay</button>
        </div>
    </div>
  )
}

export default SucessfullPopup