import React from "react";
// import Searchbar from "@/components/availableHospital/requestStatus/Searchbar";
// import RequestTable from "@/components/availableHospital/requestStatus/RequestTable"
// import Searchbar from "./Searchbar";
// import Requesthospitals from "./RequestTable";
const Databag = () => {
    return(
<div className="mt-16 flex flex-col w-full">
    <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">

        <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]  ">
<p>Hospital</p>

<div className="flex justify-between">
  <div className="w-1/3 p-2">
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md mb-4" />
    <select className="block w-full p-2 border border-gray-300 rounded-md mb-4">
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded-md">Submit</button>
  </div>
  <div className="w-1/3 p-2">
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md" />
  </div>
  <div className="w-1/3 p-2">
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md" />
  </div>
</div>

        </div>
    </div>
</div>
    );
}
export default Databag;