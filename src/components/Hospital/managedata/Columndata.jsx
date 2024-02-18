import React from 'react'
import Searchbar from "@/components/Hospital/managedata/Searchbar"
import Databag from "@/components/Hospital/managedata/Databag"

import { Search } from 'lucide-react';

const Columndata = () => {
  return( 
<div class="mt-16 flex flex-col h-screen w-full">
  <div class="bg-[#F8F8F8] min-h-[10%] flex justify-center items-center">
  <div >
    <Searchbar/>
  </div>
</div>
<div class="bg-[#F8F8F8] min-h-[90%] flex justify-center items-center">
<div class="">
<Databag/>
</div>
</div>
</div>

  );
};

export default Columndata
