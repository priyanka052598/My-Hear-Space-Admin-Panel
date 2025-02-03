import React from 'react'
// import LinesScatterGrapgh from 'Utiles/LinesScatterGrapgh/LinesScatterGraph';


function Analytics() {
  return (


    <>
     {/* Total Payment Overview */}
     <div className="totalpaymentoverview w-4/5 px-[40px] my-5  py-[24px] rounded-[24px] bg-white">
            <div className=" heading text-[24px] font-medium mb-5 ">Total Credited</div>
            <div className="boxes flex gap-3 w-full">
                <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
                    <span className='text-[24px] text-black mb-2 font-medium'>₹45,620.45</span>
                     <span className=' text-[16px] text-[#808080] text-center'>Today</span>
                     </div>
                <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
                    <span className='text-[24px] text-black mb-2 font-medium'>₹45,620.45</span>
                     <span className=' text-[16px] text-[#808080] text-center'>Last 7 Days</span>
                     </div>
                <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
                    <span className='text-[24px] text-black mb-2 font-medium'>₹45,620.45</span>
                     <span className=' text-[16px] text-[#808080] text-center'>Last 30 Days</span>
                     </div>
                <div className="1  w-1/4 border-[1px] border-[#808080] rounded-[16px] px-[20px] py-[20px] flex flex-col justify-center items-center">
                    <span className='text-[24px] text-black mb-2 font-medium'>₹45,620.45</span>
                     <span className=' text-[16px] text-[#808080] text-center'>Last 180 Days</span>
                     </div>
            </div>

        </div>

        <div className='flex gap-3  w-full'>
    <div className="graoh w-4/5 px-[40px]   py-[30px] rounded-[24px] bg-white">
    <div className="heading p-7 text-[24px]">
    Funds Credited 
    </div>
    <div className="grapgh">
        {/* <LinesScatterGrapgh className="w-full h-full"/> */}
    </div>

    </div>
    </div>
    </>
  

  )
}

export default Analytics