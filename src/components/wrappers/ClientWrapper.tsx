import React from 'react'
import MainHeader from '../Headers/MainHeader'

const ClientWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
     <>
          <MainHeader />
          {children}
     </>
  )
}

export default ClientWrapper