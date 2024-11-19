'use client'
import React from 'react'
import AdminPage from './components-c/InstitutionPage'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
  };
     return (
       <div className="w-full h-full bg-white rounded-[20px] flex flex-col items-baseline justify-items-start gap-[10px]  py-[20px] pl-10 m-3">
         <div className="flex items-center w-[800px]">
           <div className="relative flex items-center w-full h-10">
             <BiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
             <input
               type="text"
               placeholder="Search for anything"
               value={searchTerm}
               onChange={handleSearchChange}
               className="bg-gray-100 text-gray-500 px-8 py-2 w-full border border-gray-200 rounded-md outline-none"
             />
           </div>
           <div className="flex gap-4 ml-3">
             <button className="bg-main-blue-600 border border-gray-400 px-4 py-3 w-auto whitespace-nowrap text-white rounded-md hover:bg-blue-950 text-xs ">
               Generate new Certificates
             </button>
           </div>
         </div>

         <div className="flex space-x-4 text-gray-800 mt-10 w-[800px]">

  <div className="bg-main-blue-600 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl flex-2">
    <h2 className="text-sm font-sans font-medium text-gray-200">Total Students Registered</h2>
    <div className="flex items-center justify-between mt-4">
      <span className="text-3xl font-bold text-white">7567</span>
    </div>
  </div>

  <div className="bg-main-blue-600 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl flex-2">
    <h2 className="text-sm font-sans font-medium text-gray-200">Total Degrees Issued</h2>
    <div className="flex items-center justify-between mt-4">
      <span className="text-3xl font-bold text-white">567</span>
    </div>
  </div>
  <div className="bg-main-blue-600 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl flex-2">
    <h2 className="text-sm font-sans font-medium text-gray-200">Total Students Registered</h2>
    <div className="flex items-center justify-between mt-4">
      <span className="text-3xl font-bold text-white">7567</span>
    </div>
  </div>
</div>


       </div>
     );
}

export default Page