import React from "react"
const InstitutionWrapper = ({children}:{children:React.ReactNode}) => {
     return (
          <div className="w-screen h-screen flex flex-row">
               {children}
          </div>
     )
}

export default InstitutionWrapper