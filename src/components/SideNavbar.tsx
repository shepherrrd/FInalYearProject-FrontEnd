import React, { useState, createContext, useContext, ReactNode, ReactElement } from 'react';
import Image from 'next/image';
import { ChevronFirst, MoreVertical, ChevronLast } from 'lucide-react';
import { UserData } from "@/types/auth.types";

const SidebarContext = createContext<{ expanded: boolean } | undefined>(undefined);

interface SideNavbarProps {
  children: ReactNode;
}

function getUserData(): UserData | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const userDataString = localStorage.getItem('user');
  return userDataString ? JSON.parse(userDataString) : null;
}

const SideNavbar = ({ children }: SideNavbarProps) => {
  const [expanded, setExpanded] = useState(false);
  const userData = getUserData();

  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pd-2 flex justify-between items-center'>
          <div className='flex items-center'>
            <Image 
              loading="lazy" 
              src='/logo.svg' 
              width={32} 
              height={32}  
              className={`overflow-hidden transition-all ${expanded ? "w-9" : "w-0"}`} 
              alt='Logo'
            />
            <span className={`ml-2 transition-all text-lg ${expanded ? "inline" : "hidden"}`}>Anahit</span>
          </div>
          <button onClick={() => setExpanded(curr => !curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>

        <div className='border-t flex p-3'>
          <Image loading="lazy" src='/avatar1.png' width={32} height={32} alt='Logo' className='w-10 h-10'/> 
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className='leading-4'>
            <h4 className="front-semibold">
              {userData ? `${userData.firstName || 'Unknown'} ${userData.lastName || ''}`.trim() : 'Unknown'}
            </h4>
            <span className='text-xs text-gray-600'>
              {userData ? userData.email || 'Unknown' : 'Unknown'}
            </span>
            </div>
            <MoreVertical size={20}/>
          </div>
        </div>
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: ReactElement;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ icon, text, active = false, alert = false, onClick }: SidebarItemProps) {
  const context = useContext(SidebarContext);
  const expanded = context ? context.expanded : false;

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
      onClick={onClick} // Add the onClick handler here
    >
      {icon}
      <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}/>
      )}
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
    </li>
  );
}

export default SideNavbar;
