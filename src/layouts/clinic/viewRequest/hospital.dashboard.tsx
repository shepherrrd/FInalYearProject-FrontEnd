"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import Header, { HeaderName } from "@/components/Header"
import LeftColumn from "@/components/Hospital/viewrequest/LeftColumn"
import RightColumn from "@/components/Hospital/viewrequest/RightColumn"
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
        <SidebarItem  icon={<UploadCloud size={20} />} text="Upload" active={undefined} alert={undefined} />
        <SidebarItem  icon={<CopyCheck size={20} />} text="Requests" alert={undefined} active />
        <SidebarItem  icon={<Layers size={20} />} text="Manage Data" active={undefined} alert={undefined} />
        <hr className="my-3"/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" active={undefined} alert={undefined}/>
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <Header>
          <HeaderName text="Manage Data"/>
        </Header>
        <LeftColumn/>
        <RightColumn/>

      </div>
      </div>

  )
}