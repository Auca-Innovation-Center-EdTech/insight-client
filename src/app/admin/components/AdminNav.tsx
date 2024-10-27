import SvgIcon from '@/components/icons/SvgIcon';
import { Icons } from '@/data/icons';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md';
const AdminNav = () => {
     return (
          <div className='w-[15%] h-full flex flex-col justify-between bg-main-blue-600 p-[20px] '>
               <div className='w-full flex items-center gap-[5px]'>
                    <Image src={'/logo/insight-logo.svg'} width={40} height={40} alt="Insight Logo" className='rounded-full' />
                    <h4 className='text-[1.2rem] font-semibold text-white '>Insight</h4>
               </div>
               <div className='w-full flex flex-col items-center gap-[10px]  '>
                    <NavLink name='Dashboard' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Institutions' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Configuration' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Degree & Template' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Report' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Notification' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Setting' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Help & Center' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Dark Mode' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
               </div>
          </div>
     )
}

const NavLink = (
          {name, active=false, dest, icon } : {name:string, active:boolean, dest:string, icon: React.ReactNode}
     ) => {
     return (
          <Link href={dest} className={`flex items-center gap-[5px] w-full text-[0.8rem] font-semibold p-[5px] rounded-[5px] ${active ? "bg-main-blue-100 text-main-blue-400 " : 'text-main-blue-100 bg-transparent'} `} ><i className={`text-[24px] text-red-500`}>{icon}</i> {name}</Link>
     )
}

export default AdminNav