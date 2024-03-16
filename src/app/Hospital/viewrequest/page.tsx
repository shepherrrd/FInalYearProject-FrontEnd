"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import {
  UploadCloud,
  CopyCheck,
} from "lucide-react"
import router from "next/router";

export default function HospitalDashboard(){
  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem icon={<UploadCloud size={20} />} text="Upload" active={undefined} alert={undefined} onClick={() => router.push('/Hospital/upload')}  />
        <SidebarItem icon={<CopyCheck size={20} />} text="Requests" alert active onClick={() => router.push('/Hospital/request')} />
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
      <div className='mt-16 flex justify-center items-center md:w-[30%] bg-[#F8F8F8] min-h-[60%]'>
      <div className='bg-white p-4 rounded-lg shadow-lg text-center w-3/4 h-5/6 flex flex-col justify-between'>
        <div>
          <img className="w-32 h-32 mb-4 rounded-full mx-auto ring-2 ring-gray-300" src="/avatar1.png" alt="Bordered avatar" />
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="mb-2">Institution, State</p>
          <p className="mb-4">Nigeria</p>
        </div>
        <div className="flex flex-col space-y-4 mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center">View Request</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center">IRB Approval</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center">Proposal</button>
        </div>
        <div className="flex justify-around pb-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded w-32 h-12">Reject</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded w-32 h-12">Accept</button>
        </div>
      </div>
    </div>
    <div className='md:mt-16 flex flex-col items-center md:w-[70%] bg-[#F8F8F8] min-h-[60%]'>
      <div className='bg-white w-11/12 h-5/6 mt-2 p-4 overflow-y-auto'>
        <p className="text-2xl font-bold">Reason for application</p>
        <div>
          <p className='p-4'>
          Malaria has long been a scourge upon the health of those living in tropical regions, with Ogun State, Nigeria, being no exception. The fight against this malady is not just a battle of medicine and treatment but also one of information and data. To understand the multifaceted impact of malaria and effectively combat its presence, comprehensive data collection is crucial. The necessity of such data cannot be overstated; it is the foundation upon which successful intervention strategies are built.

Firstly, the need for robust malaria data is anchored in the ability to track and predict outbreaks. Historical data patterns help in understanding the seasonal variances in malaria cases, which are often tied to the region’s rainy seasons, thereby enabling health officials to prepare and allocate resources effectively. Without accurate data, these predictions become mere guesswork, leading to either an excess or, more dangerously, a shortage of necessary resources like bed nets, antimalarial drugs, and diagnostic kits.

Secondly, granular malaria data is essential for assessing the efficacy of ongoing interventions. Ogun State, with its unique geographic and socioeconomic landscape, may respond differently to control strategies that have been effective in other regions. Detailed data allows for a nuanced analysis of intervention outcomes, helping to tailor approaches that are specific to the communities within the state. For example, the data can inform whether indoor residual spraying is more effective in certain districts or if education campaigns are resulting in better preventative measures being taken by the population.

Furthermore, data is the key to securing funding and international aid. Donor agencies and NGOs are more inclined to support initiatives with a clear evidence-based need and a track record of data-driven results. A lack of compelling data undermines the region’s ability to draw in necessary external support, which is often a critical component in sustaining large-scale public health campaigns.

On an individual level, patient data contributes to more effective case management. With information on demographics, treatment outcomes, and patient histories, healthcare providers can better understand the characteristics of the disease as it presents locally. This knowledge directly impacts the quality of care, leading to improved treatment protocols that are adapted to the realities on the ground in Ogun State.

Finally, in the grander scheme of public health, data contributes to global knowledge. Malaria is not a local issue; it is a global challenge. By compiling and sharing data, Ogun State contributes to the worldwide understanding of malaria trends, which is indispensable for the development of vaccines, the emergence of drug resistance, and the analysis of vector patterns.

In conclusion, the collection and analysis of malaria data in Ogun State are of paramount importance. It is the cornerstone of prevention, treatment, and eradication strategies. Without it, efforts against malaria are inefficient and not optimally effective. With the continued and focused collection of data, the state can expect to see a significant downturn in malaria prevalence, leading to a healthier population and a more vibrant future for all residents.


          </p>
        </div>
      </div>
    </div>


      </div>
      </div>

  );
}