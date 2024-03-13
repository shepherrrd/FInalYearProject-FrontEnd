import React from "react";
import Searchbar from "@/components/Admin/Users/Searchbar";
import RequestTable from "@/components/Admin/Users/RequestTable"
const Databag = () => {
    return(
<div className="mt-16 flex flex-col w-full">
    <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">
        <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]  ">
        <p className="text-2xl font-bold">Users</p>
<Searchbar/>
<RequestTable/>
        </div>
    </div>
</div>
    );
}
export default Databag;