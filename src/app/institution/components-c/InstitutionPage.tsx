import React from "react"
import { CiUser } from "react-icons/ci"
import { IoNotifications, IoSettings } from "react-icons/io5"

const AdminPage = ({children}: {children: React.ReactNode}) => {
     return (
          <div className='w-full h-full overflow-y-auto flex flex-col items-center justify-start gap-[10px] py-[10px] bg-gray-100'>
               <div className='w-full h-auto flex items-center justify-start gap-[10px] px-[2%]'>
                    <i className='text-gray-600 text-[18px] cursor-pointer p-[5px] rounded-full hover:bg-gray-400 hover:text-gray-300 transition-all duration-300'><IoNotifications /></i>
                    <i className='text-gray-600 text-[18px] cursor-pointer p-[5px] rounded-full hover:bg-gray-400 hover:text-gray-100 transition-all duration-300'><IoSettings /></i>
                    <i className='text-gray-600 text-[18px] cursor-pointer p-[5px] rounded-full hover:bg-gray-400 hover:text-gray-100 transition-all duration-300'><CiUser /></i>
               </div>
               <div className='w-full  flex flex-col items-center'>
                    {children}
               </div>

          </div>
     )
}

export default AdminPage