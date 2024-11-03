import React from 'react'
import MainHeader from '../Headers/MainHeader'
import MainFooter from '../footer/MainFooter'

const ClientWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
     <div className='w-full max-w-[1512] mx-auto'>
          <MainHeader />
          <div className='w-full flex flex-col items-center gap-[20px] py-[20px]'>
          {children}
          </div>
          <MainFooter />
     </div>
  )
}

export default ClientWrapper