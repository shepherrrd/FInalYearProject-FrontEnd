"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import Header, { HeaderName } from "@/components/Header"
import OneColumn from "@/components/Hospital/upload/Onecolumn"
import { UploadCloud,CopyCheck,} from "lucide-react"
import { useRouter } from "next/navigation"; 

export default function HospitalUpload(){
  const router = useRouter(); // Use the useRouter hook to get the router instance

  return (
    <div className="flex">
      <SideNavbar>
        {/* <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert={undefined} onClick={() => router.push('/Hospital/dashboard')}  /> */}
        <SidebarItem icon={<UploadCloud size={20} />} text="Upload" active alert={undefined} onClick={() => router.push('/Hospital/upload')}  />
        <SidebarItem icon={<CopyCheck size={20} />} text="Requests" alert active={undefined} onClick={() => router.push('/Hospital/request')} />
        {/* <SidebarItem icon={<Layers size={20} />} text="Manage Data" active={undefined} alert={undefined} onClick={() => router.push('/Hospital/request')} /> */}
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

