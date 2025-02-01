import React from 'react'

function SessionDetails() {
  return (
    <div className='px-7'>
<div className=' w-[60%] flex flex-col'>
      <div className='  rounded-[24px] flex justify-between items-center bg-white px-[40px] py-[30px]'>
        <h2 className="text-[24px] mb-5 "> Overview</h2>
        <div className="right gap-3 flex  items-center">
        <span className='text-[16px]'>Filter</span>
        <div className=' py-2 px-3 bg-white rounded-[8px] border-[1px] border-[#808080]'>
        
            <select className='pr-12 border-white' name="" id=""> 
              {
                ["Till Today", "Update", "Created ", "Pending", "Submitted"].map((item,) => {
                  return <option>{item}</option>
                })
              }

            </select>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SessionDetails