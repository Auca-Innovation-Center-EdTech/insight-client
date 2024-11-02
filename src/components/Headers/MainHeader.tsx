import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainHeader = () => {
     return (
          <div className='bg-transparent flex items-center justify-between px-[2.5%] py-[10px]'>
               <div className='w-auto flex items-center gap-[5px]'>
                    <Image src={'/logo/logo.png'} width={50} height={50} alt='insight logo'  />
                    <h1 className='text-main-blue-100 text-[1.4rem] font-extrabold '>Insight</h1>
               </div>
               <div className='w-auto flex justify-between items-center gap-[20px]'>
                    <Link className='text-[0.8rem] text-main-black-100 mx-[10px] ' href={'/'}>Home</Link>
                    <Link className='text-[0.8rem] text-main-black-100 mx-[10px] ' href={'/'}>Pricing</Link>
                    <Link className='text-[0.8rem] text-main-black-100 mx-[10px] ' href={'/'}>Use Cases</Link>
                    <Link className='text-[0.8rem] text-main-black-100 mx-[10px] ' href={'/'}>Location</Link>
                    <Link className='text-[0.8rem] text-main-black-100 mx-[10px] ' href={'/'}>FAQ</Link>
                    <Link className='text-[0.8rem] text-main-black-100 mx-[10px] ' href={'/'}>Company</Link>
               </div>
               <Link href={'/login'} className='rounded-[30px] px-[30px] py-[7.5px] border-[1.3px] border-main-black-200 text-[0.7rem] font-bold text-main-blue-100 hover:bg-main-blue-500' >Login</Link>
          </div>
     )
}

export default MainHeader