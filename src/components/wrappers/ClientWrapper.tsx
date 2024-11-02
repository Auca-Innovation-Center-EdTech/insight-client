import React from 'react'
import MainHeader from '../Headers/MainHeader'
import MainFooter from '../footer/MainFooter'

const ClientWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
     <>
          <MainHeader />
          <div className='w-full flex flex-col items-center gap-[20px] py-[20px]'>
          {children}
          </div>
          <MainFooter />
     </>
  )
}

export default ClientWrapper