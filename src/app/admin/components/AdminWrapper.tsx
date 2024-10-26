import React from 'react'
import AdminNav from './AdminNav'

const AdminWrapper = ({children} : {children: React.ReactNode}) => {
     return (
          <div className='w-screen h-screen flex flex-row'>
               <AdminNav />
               {children}
          </div>
     )
}

export default AdminWrapper