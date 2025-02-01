// import React from 'react'
// import images from 'assets'



// function LoginScreen() {

//     let data=[
//         {
//         img:"",
//         heading:"Banner 1",
//         size:"390*330 ",
//  },
//         {
//         img:"",
//         heading:"Banner 1",
//         size:"390*330 ",
//  },
//         {
//         img:"",
//         heading:"Banner 1",
//         size:"390*330 ",
//  },
// ]
//   return (
//     <div className='flex'>
        
//         <div className='w-3/5 flex flex-col gap-7 '>
//         {
//             data.map((item)=>{
//                 return <div className='w-full h-[200px] rounded-[16px] flex gap-[40px]  bg-white p-[24px]'>
//                     <div className='w-1/4 h-[152px]  items-center '>
//                     <img className='rounded-[12px]  h-full object-cover ' src={images.profile1} alt="" />

//                     </div>
//                 <div className='flex flex-col justify-between'>
//                     <div className='w-3/4  '>
//                         <h2 className='text-[20px]'>{item.heading}</h2>
//                         <span className='text-[#808080] text-[16px]'> Size -{item.size}pixels</span>
//                         </div>
//                         <div className="btns flex gap-[16px]">
//                             <button className='text-[#D9D9D9] border-[1px] border-[#D9D9D9] py-[8px] px-[24px] rounded-[8px]'>Preview</button>
//                             <button className='text-white  bg-[#D9D9D9] py-[8px] px-[24px] rounded-[8px]'>Replace</button>

//                         </div>
//                 </div>
//                 </div>
//             })
//         }

      
//             </div>
//             <div className='w-2/5 bg-white'>
//             <h2 className='text-[24px]'>Preview</h2>
            

//             </div>
            

            
//     </div>
//   )
// }

// export default LoginScreen