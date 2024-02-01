import React from 'react'
import Requestpreview from "@/components/Requestpreview"

const LeftColumn = () => {
  return( 
  <div className='mt-16 flex justify-between md:w-[80%] bg-[#F8F8F8] min-h-[60%]'>

    <Requestpreview />
  </div>
  );
};

export default LeftColumn
