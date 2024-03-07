"use client";

import { useRouter } from 'next/navigation';
import SideNavbar, { SidebarItem } from '@/components/SideNavbar';
import Header, { HeaderName } from '@/components/Header';
import LeftColumn from '@/components/Hospital/dashboard/LeftColumn';
import RightColumn from '@/components/Hospital/dashboard/RightColumn';
import {
  UploadCloud,
  CopyCheck,
  LayoutDashboard
} from 'lucide-react';

export default function HospitalDashboard() {
  const router = useRouter();

  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert={undefined} onClick={() => router.push('/Hospital/dashboard')} />
        <SidebarItem icon={<UploadCloud size={20} />} text="Upload" active={undefined} alert={undefined} onClick={() => router.push('/Hospital/upload')} />
        <SidebarItem icon={<CopyCheck size={20} />} text="Requests" alert active={undefined} onClick={() => router.push('/Hospital/request')} />
        {/* <SidebarItem icon={<Layers size={20} />} text="Manage Data" active={undefined} alert={undefined} onClick={() => router.push('/Hospital/request')} /> */}
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <Header>
          <HeaderName text="Dashboard" />
        </Header>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
