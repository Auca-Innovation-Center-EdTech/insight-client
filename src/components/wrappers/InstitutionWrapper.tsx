import React from 'react'
import AdminNav from '../../app/institution/components-c/InstitutionNav'

const InstitutionWrapper = ({children} : {children: React.ReactNode}) => {
     return (
          <div className='w-screen h-screen flex flex-row overflow-hidden'>
               <AdminNav />
               {children}
          </div>
     )
}

export default InstitutionWrapper