import React from 'react'
import AdminNav from '../../app/admin/components/AdminNav'

const AdminWrapper = ({children} : {children: React.ReactNode}) => {
     return (
          <div className='w-screen h-screen flex flex-row overflow-hidden'>
               <AdminNav />
               {children}
          </div>
     )
}

export default AdminWrapper