"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import Header, { HeaderName } from "@/components/Header"
import OneColumn from "@/components/Admin/Users/Onecolumn"
import {
  User
} from "lucide-react"


export default function HospitalDashboard(){
  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem  icon={<User size={20} />} text="Users" active alert={undefined} />
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