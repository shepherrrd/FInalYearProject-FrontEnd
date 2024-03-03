"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import Header, { HeaderName } from "@/components/Header"
import OneColumn from "@/components/Researcher/requestStatus/Onecolumn"
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
        <SidebarItem  icon={<LayoutDashboard size={20} />} text="Dashboard" active alert={undefined} />
        <SidebarItem  icon={<UploadCloud size={20} />} text="Upload" active={undefined} alert={undefined} />
        <SidebarItem  icon={<CopyCheck size={20} />} text="Requests" alert active={undefined} />
        <SidebarItem  icon={<Layers size={20} />} text="Manage Data" active={undefined} alert={undefined} />
        <hr className="my-3"/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" active={undefined} alert={undefined}/>
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <Header>
          <HeaderName text="Dashboard"/>
        </Header>
        <OneColumn/>
      </div>
      </div>

  )
}