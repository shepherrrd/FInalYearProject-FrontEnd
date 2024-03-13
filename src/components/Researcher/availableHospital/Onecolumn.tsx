import React from "react";
// import Searchbar from "@/components/availableHospital/requestStatus/Searchbar";
// import RequestTable from "@/components/availableHospital/requestStatus/RequestTable"
import Searchbar from "./Searchbar";
import Requesthospitals from "./RequestTable";
const Databag = () => {
    return(
<div className="mt-16 flex flex-col w-full">
    <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">

        <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]  ">
<p className="text-2xl font-bold">Hospitals</p>
<Searchbar/>
<Requesthospitals/>
        </div>
    </div>
</div>
    );
}
export default Databag;