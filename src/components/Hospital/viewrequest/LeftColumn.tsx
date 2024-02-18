import React from 'react'
import Requestpreview from "@/components/Hospital/dashboard/Requestpreview"

const LeftColumn = () => {
  return( 
<div className='mt-16 flex justify-between items-center md:w-[30%] bg-[#F8F8F8] min-h-[60%]'>
<div className='bg-white w-3/4 h-3/4 m-auto mt-2 flex justify-center '>
  <div>
    <img className="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/avatar1.png" alt="Bordered avatar" />
    <hr/>
    <p>name</p>
    <p>institution, state</p>
    <p>country</p>
    <hr/>

  </div>
</div>
</div>
  );
};

export default LeftColumn
