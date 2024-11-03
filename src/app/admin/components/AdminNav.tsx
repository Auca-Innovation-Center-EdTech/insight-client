
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrTemplate } from 'react-icons/gr';
import { IoNotifications, IoSettings } from 'react-icons/io5';
import { LuSchool } from 'react-icons/lu';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { TbReportSearch } from 'react-icons/tb';
const AdminNav = () => {
     return (
          <div className='w-[15%] h-full flex flex-col justify-between bg-main-blue-600 p-[20px] overflow-x-hidden overflow-y-auto '>
               <div className='w-full flex items-center gap-[5px]'>
                    <Image src={'/logo/insight-logo.svg'} width={40} height={40} alt="Insight Logo" className='rounded-full' />
                    <h4 className='hidden md:inline-flex text-[1.2rem] font-semibold text-white '>Insight</h4>
               </div>
               <div className='w-full flex flex-col items-center gap-[20px]  '>
                    <NavLink name='Dashboard' dest='/admin' active={false} icon={<MdSpaceDashboard />} />
                    <NavLink name='Institutions' dest='/admin/institution' active={false} icon={<LuSchool />} />
                    {/* <NavLink name='Configuration' dest='/admin' active={false} icon={<MdSpaceDashboard />} /> */}
                    <NavLink name='Degree & Template' dest='/admin/degrees' active={false} icon={<GrTemplate />} />
                    <NavLink name='Report' dest='/admin' active={false} icon={<TbReportSearch />} />
                    <NavLink name='Notification' dest='/admin/notifications' active={false} icon={<IoNotifications />} />
                    <NavLink name='Setting' dest='/admin/settings' active={false} icon={<IoSettings />} />
               </div>
               <div className='w-full flex flex-col items-center gap-[10px] '>
                    <NavLink name='Logout' dest='/' active={false} icon={<RiLogoutCircleLine />} />
                    <div className='w-full flex items-center gap-[5px]'>
                         <Image src='/images/admin-user.png' width={30} height={30} alt='admin user icon' className='rounded-full ' />
                         <div  className='hidden  auto md:flex flex-col gap-[2.5px]'>
                              <p className='text-[0.8rem] font-bold text-main-blue-100'>System Admin</p>
                              <p className='text-[0.7rem] text-gray-400'>admin@auca.ac.rw</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

const NavLink = (
          {name, active=false, dest, icon } : {name:string, active:boolean, dest:string, icon: React.ReactNode}
     ) => {
     return (
          <Link href={dest} className={`flex items-center gap-[5px] w-full text-[0.8rem] p-[5px] rounded-[5px] ${active ? "bg-main-blue-100 text-main-blue-400 " : 'text-main-blue-100 bg-transparent'} hover:bg-white transition-all hover:text-main-blue-600 duration-300 group`} ><i className={`text-[18px] text-gray-400 group-hover:text-gray-800`}>{icon}</i> <span className='hidden md:inline-flex'>{name}</span></Link>
     )
}

export default AdminNav