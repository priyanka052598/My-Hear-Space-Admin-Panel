// import React from 'react'

// function DeclinedSession() {
//   let TableData=[
//     {
//       number:1,
//       date:"15/12/24",
//       type:"Video",
//       reason:"Network Issues",
//       more:"I am currently facing network issues in my area due to bad weather condition."

//     }
//   ]
//   return (
//     <div>
//       <div className='px-7 py-4 '>
//     <div className='w-[75%] flex flex-col rounded-[24px] bg-white px-[40px]  py-[30px]'>
//       <h2 className="text-[24px] mb-5 ">Overview</h2>
//       <div className="grid grid-cols-2 gap-4 text-left">
//           {/* Left Column - Field Names */}
//           <div className="font-medium text-gray-700 space-y-4">
//             <div>Date:</div>
//             <div>Type:</div>
//             <div>Reason:</div>
//             <div>Details:</div>
//           </div>
//           {/* Right Column - Data */}
//           <div className="text-gray-900 space-y-4">
//             <div>{TableData.date}</div>
//             <div>{TableData.type}</div>
//             <div>{TableData.reason}</div>
//             <div>{TableData.more}</div>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
//   )
// }

// export default DeclinedSession



import React from 'react';
import { FaPhoneSlash } from "react-icons/fa6";


function DeclinedSession() {
  let TableData = [
    {
      number: 1,
      date: '15/12/24',
      type: 'Video',
      reason: 'Network Issues',
      more: 'I am currently facing network issues in my area due to bad weather conditions.',
    },
    {
      number: 2,
      date: '15/12/24',
      type: 'Video',
      reason: 'Network Issues',
      more: 'I am currently facing network issues in my area due to bad weather ck issues in my area due to bad weather conditions.',
    },
    {
      number: 3,
      date: '15/12/24',
      type: 'Video',
      reason: 'Network Issues',
      more: 'I am currently facing network issues in my area due to bad weather ck issues in my area due to bad weather conditions.',
    },
  ];

  return (
    <>
    <div className="px-7 py-4 flex gap-7">
       {/* table */}
      <div className="w-[75%] flex flex-col rounded-[24px] bg-white px-[40px] py-[30px] ">
        <h2 className="text-[24px] mb-5">Overview</h2>
       
        <div className=' flex flex-col gap-6'>
        {TableData.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-[150px_1fr] gap-0 text-left border border-gray-300"
          >
            {/* Left Column - Field Names */}
            <div className="font-600 text-black  border-r border-gray-300">
              <div className="px-4 py-3 border-b">Sr. No..</div>
              <div className="px-4 py-3 border-b">Date</div>
              <div className="px-4 py-3 border-b">Type</div>
              <div className="px-4 py-3 border-b">Reason</div>
              <div className="px-4 py-3">Details</div>
            </div>
            {/* Right Column - Data */}
            <div className="text-gray-900">
              <div className="px-4 py-3 border-b">{data.number}</div>
              <div className="px-4 py-3 border-b">{data.date}</div>
              <div className="px-4 py-3 border-b">{data.type}</div>
              <div className="px-4 py-3 border-b">{data.reason}</div>
              <div className="px-4 py-3">{data.more}</div>
            </div>
          </div>
        ))}
    </div>
    </div>
    {/* Declined session */}
    <div className='w-[25%] rounded-[24px] bg-white gap-8 flex flex-col justify-center items-center h-fit px-[30px] py-[30px] '>
      <div className='flex flex-col justify-center items-center '>

   
      <div className='bg-[#F0F0F0] p-5 w-fit rounded-[12px]'><FaPhoneSlash className='text-[50px] '/></div>
      <span className='text-[60px] font-600'>3</span>
      <span className='text-[24px] font-500'>Sessions Declined</span>
      </div>
      <button className='text-[18px] w-full border-[1px] border-black py-[12px]  rounded-[12px]' type="button ">Deactivated - 0</button>

    </div>
    </div>
     {/* Button */}

<div  className='bg-white flex justify-end  border-t-[1px] py-3 border-[#808080]'>
<button className='text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]' type="button">Deactivate Listener</button>
                    </div>
                    </>
  );
}

export default DeclinedSession;

