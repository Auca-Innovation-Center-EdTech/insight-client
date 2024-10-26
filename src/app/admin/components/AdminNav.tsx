import Image from 'next/image'
import React from 'react'

const AdminNav = () => {
     return (
          <div className='w-[15%] h-full flex flex-col justify-between bg-main-blue-600 p-[20px] '>
               <div className='w-full flex items-center gap-[5px]'>
                    <Image src={'/logo/insight-logo.svg'} width={40} height={40} alt="Insight Logo" className='rounded-full' />
                    <h4 className='text-[1.2rem] font-semibold text-white '>Insight</h4>
               </div>
          </div>
     )
}

export default AdminNav