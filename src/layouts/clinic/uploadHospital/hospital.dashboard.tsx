"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import Header, { HeaderName } from "@/components/Header"
import OneColumn from "@/components/Hospital/upload/Onecolumn"
import {
  UploadCloud,
  CopyCheck,
  Layers,
  LayoutDashboard,
  Settings,
} from "lucide-react"


export default function HospitalDashboard(){
  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem  icon={<LayoutDashboard size={20} />} text="Dashboard" active={undefined} alert={undefined} />
        <SidebarItem  icon={<UploadCloud size={20} />} text="Upload" active alert={undefined} />
        <SidebarItem  icon={<CopyCheck size={20} />} text="Requests" alert active={undefined} />
        <SidebarItem  icon={<Layers size={20} />} text="Manage Data" active={undefined} alert={undefined} />
        <hr className="my-3"/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" active={undefined} alert={undefined}/>
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <Header>
          <HeaderName text="Manage Data"/>
        </Header>
        <OneColumn/>
      </div>
      </div>

  )
}





// export default function HospitalDashboard() {
//   return (
//     <div className="bg-stone-50 flex flex-col items-stretch pb-12">
//       <div className="z-[1] w-full px-5 max-md:max-w-full">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
//             <div className="items-stretch self-stretch bg-white flex grow flex-col w-full pt-9 border-r-gray-200 border-r border-solid max-md:mt-5">
//               <div className="flex flex-col items-stretch px-6 max-md:px-5">
//                 <div className="flex items-stretch justify-between gap-5">
//                   <img
//                     loading="lazy"
//                     src="/logo.svg"
//                     className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
//                   />
//                   <div className="text-black text-xl leading-5 my-auto">
//                     Anahit
//                   </div>
//                 </div>
//                 <div className="items-stretch border shadow-sm bg-white flex w-full flex-col justify-center mt-7 px-3.5 py-2.5 rounded-lg border-solid border-gray-300">
//                   <div className="items-center flex justify-between gap-2">
//                     <img
//                       loading="lazy"
//                       src="/search.svg"
//                       className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
//                     />
//                     <div className="overflow-hidden text-gray-500 text-ellipsis text-base leading-6 self-stretch grow whitespace-nowrap">
//                       Search
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="items-stretch flex flex-col mt-6 px-4">
//                 <div className="items-stretch bg-rose-200 flex w-full flex-col justify-center px-3 py-2 rounded-md">
//                   <div className="items-stretch flex justify-between gap-3">
//                     <img
//                       loading="lazy"
//                       src="/analytics.svg"
//                       className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
//                     />
//                     <div className="text-gray-800 text-base font-semibold leading-6">
//                       Dashboard
//                     </div>
//                   </div>
//                 </div>
//                 <div className="items-stretch bg-white flex w-full flex-col justify-center mt-1 px-3 py-2 rounded-md">
//                   <div className="items-stretch flex justify-between gap-3">
//                     <img
//                       loading="lazy"
//                       src="/upload.svg"
//                       className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
//                     />
//                     <div className="text-slate-700 text-base font-semibold leading-6">
//                       Upload
//                     </div>
//                   </div>
//                 </div>
//                 <div className="items-stretch bg-white flex w-full flex-col justify-center mt-1 px-3 py-2 rounded-md">
//                   <div className="items-stretch flex justify-between gap-3">
//                     <img
//                       loading="lazy"
//                       src="/requests.svg"
//                       className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
//                     />
//                     <div className="text-slate-700 text-base font-semibold leading-6">
//                       Requests
//                     </div>
//                   </div>
//                 </div>
//                 <div className="items-stretch bg-white flex w-full flex-col justify-center mt-1 px-3 py-2 rounded-md">
//                   <div className="items-stretch flex justify-between gap-3">
//                     <img
//                       loading="lazy"
//                       src="/managedata.svg"
//                       className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
//                     />
//                     <div className="text-slate-700 text-base font-semibold leading-6">
//                       Manage Data
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="items-stretch flex flex-col mt-72 pb-8 px-4 max-md:mt-10">
//                 <div className="items-stretch bg-white flex w-full flex-col justify-center px-3 py-2 rounded-md">
//                   <div className="items-stretch flex justify-between gap-3">
//                     <img
//                       loading="lazy"
//                       src="/support.svg"
//                       className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
//                     />
//                     <div className="text-slate-700 text-base font-semibold leading-6">
//                       Support
//                     </div>
//                   </div>
//                 </div>
//                 <div className="items-stretch bg-white flex w-full flex-col justify-center mt-1 px-3 py-2 rounded-md">
//                   <div className="items-stretch flex justify-between gap-3">
//                     <img
//                       loading="lazy"
//                       src="/settings.svg"
//                       className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
//                     />
//                     <div className="text-slate-700 text-base font-semibold leading-6">
//                       Settings
//                     </div>
//                   </div>
//                 </div>
//                 <div className="items-stretch flex justify-between gap-1 mt-6 pt-6 px-2.5 border-t-gray-200 border-t border-solid">
//                   <div className="items-stretch flex justify-between gap-3 pr-4">
//                     <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-square w-10">
//                       <img
//                         loading="lazy"
//                         srcSet="/avatar1.png"
//                         className="absolute h-full w-full object-cover object-center inset-0"
//                       />
//                       <div className="relative flex shrink-0 h-10 flex-col rounded-[1000px] border-[0.75px] border-solid border-black" />
//                     </div>
//                     <div className="items-stretch flex grow basis-[0%] flex-col">
//                       <div className="text-slate-700 text-sm font-semibold leading-5">
//                         Olivia Rhye
//                       </div>
//                       <div className="text-slate-600 text-sm leading-5 whitespace-nowrap">
//                         olivia@untitledui.com
//                       </div>
//                     </div>
//                   </div>
//                   <img
//                     loading="lazy"
//                     src="/logout.svg"
//                     className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0 pb-48">
//             <div className="flex flex-col items-stretch my-auto max-md:max-w-full ">
//               <div className="text-gray-700 text-2xl font-semibold max-md:max-w-full">
//                 Dashboard
//               </div>
//               <div className="shadow-lg bg-white flex flex-col justify-center items-stretch mt-9 py-1.5 max-md:max-w-full">
//                 <div className="items-start shadow-lg flex flex-col pt-8 pb-12 px-7 rounded-lg max-md:max-w-full max-md:px-5">
//                   <div className="justify-between items-stretch self-stretch flex w-full gap-5 pr-3 max-md:max-w-full max-md:flex-wrap">
//                     <div className="text-stone-900 text-base font-semibold leading-6">
//                       Requests
//                     </div>
//                   </div>
//                   <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-3 pb-3 border-b-neutral-400 border-b-opacity-30 border-b border-solid max-md:max-w-full max-md:flex-wrap">
//                     <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
//                       <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
//                         <div className="flex justify-between gap-5 items-start">
//                           <div className="text-zinc-500 text-center text-sm font-light leading-4">
//                             No.
//                           </div>
//                           <div className="text-zinc-500 text-sm font-light leading-5">
//                             Req no.
//                           </div>
//                         </div>
//                         <div className="text-zinc-500 text-sm font-light leading-5">
//                           Name
//                         </div>
//                       </div>
//                       <div className="text-zinc-500 text-sm font-light leading-5 self-start">
//                         Date
//                       </div>
//                     </div>
//                     <div className="text-zinc-500 text-sm font-light leading-5 self-start">
//                       Time
//                     </div>
//                   </div>
//                   <div className="items-center self-stretch flex justify-between gap-5 py-3 border-b-neutral-400 border-b-opacity-30 border-b border-solid max-md:max-w-full max-md:flex-wrap">
//                     <div className="items-stretch flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
//                       <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
//                         <div className="items-stretch flex justify-between gap-5">
//                           <div className="items-center flex justify-between gap-5 pr-4">
//                             <div className="text-stone-900 text-center text-xs leading-4 my-auto">
//                               01
//                             </div>
//                             <div className="text-stone-900 text-center text-sm leading-4 whitespace-nowrap items-stretch rounded bg-neutral-400 bg-opacity-10 self-stretch aspect-[2.75] justify-center px-3 py-1">
//                               6465
//                             </div>
//                           </div>
//                           <div className="text-stone-900 text-base my-auto">
//                             Alex Noman
//                           </div>
//                         </div>
//                         <div className="text-zinc-500 text-base font-light self-center my-auto">
//                           23/01/23
//                         </div>
//                       </div>
//                       <div className="text-zinc-500 text-base font-light self-center grow whitespace-nowrap my-auto">
//                         09:44
//                       </div>
//                     </div>
//                     <div className="text-white text-center text-base leading-6 whitespace-nowrap items-stretch rounded bg-blue-600 self-stretch justify-center px-4 py-1">
//                       View
//                     </div>
//                   </div>

//                   <div className="text-blue-600 text-base font-medium whitespace-nowrap border self-center justify-center items-stretch mt-12 mb-7 px-7 py-4 rounded-2xl border-solid border-blue-600 max-md:mt-10 max-md:px-5">
//                     View All
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
//             <div className="flex flex-col items-stretch my-auto max-md:mt-10">
//               <div className="bg-white flex flex-col items-center px-20 py-12 rounded-none max-md:px-5">
//                 <div className="text-violet-950 text-center text-5xl font-medium mt-2.5">
//                   201
//                 </div>
//                 <div className="text-neutral-400 text-center text-base font-medium self-stretch mt-6">
//                   Total Applications
//                 </div>
//               </div>
//               <div className="bg-white flex flex-col items-stretch mt-11 px-20 py-12 rounded-none max-md:mt-10 max-md:px-5">
//                 <div className="text-violet-950 text-center text-5xl font-medium whitespace-nowrap mt-4 max-md:ml-1">
//                   653
//                 </div>
//                 <div className="text-neutral-400 text-center text-base font-medium whitespace-nowrap mt-10 mb-4 max-md:ml-1">
//                   Total records
//                 </div>
//               </div>
//               <div className="bg-white flex flex-col items-stretch mt-3 px-20 py-12 rounded-none max-md:px-5">
//                 <div className="text-violet-950 text-center text-5xl font-medium whitespace-nowrap mt-2.5">
//                   3,024
//                 </div>
//                 <div className="text-neutral-400 text-center text-base font-medium mt-5">
//                   Total Patients
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
