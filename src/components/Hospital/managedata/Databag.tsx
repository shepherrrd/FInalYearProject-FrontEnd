import React from "react";

const Databag = () => {
    return(
<div>
    <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row bg-white w-[75em] h-[43em] justify-center overflow-auto">
            <div className='grid grid-cols-4 gap-x-9 gap-y-10 grid-flow-row-dense mt-6'>
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                <div className='bg-white rounded-b-lg shadow-xl max-h-[250px] min-w-[250px]' />
                
                {/* Add more divs as needed */}
            </div>
        </div>
    </div>
</div>
    );
}
export default Databag;
