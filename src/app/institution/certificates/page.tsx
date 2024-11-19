'use client'
import React from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const Page = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
  };
  return (
    <div className="flex w-full h-full ml-2">
      <div className="flex w-full flex-col items-center justify-start">
        
       
        <div className="w-[800px] h-[20px] flex items-center justify-between mt-5 px-4">
        <div className="flex w-full items-center gap-0">
      
      <div className="relative w-[150px]">
        
        <input
          type="text"
          placeholder="Add filter"
          value={filter}
          onChange={handleFilterChange}
          className="bg-gray-100 text-gray-500 pl-10 pr-3 py-2 rounded-l-md border border-gray-300 w-full outline-none"
        />
      </div>
      
      <div className="relative w-[500px]">
      <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search for a student by name or Student ID"
        value={searchTerm}
        onChange={handleSearchChange}
        className="bg-gray-100 text-gray-500 px-7 py-2 w-full border border-gray-200 rounded-r-md outline-none"
      />
      </div>
      
    </div>

          <div className="flex gap-3  ml-3 text-xs font-bold ">
            <button className="bg-white border border-gray-400 px-5 py-1 text-blue-700 rounded-md hover:bg-gray-100 ">
              Export CSV
            </button>
            <button className="bg-white border border-gray-400 px-4 py-2 text-blue-700 rounded-md hover:bg-gray-100">
              Manually
            </button>
          </div>
        </div>

        <div className="w-full mt-8 px-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Please verify your identity</h2>
          <p className="text-gray-500 text-center mb-6">Select relevant documents to complete your KYC</p>

          <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center gap-4 bg-gray-50">
            <IoCloudUploadOutline className="text-[80px] text-gray-300" />
            <p className="text-gray-700 font-semibold">Select a file or drag and drop here</p>
            <p className="text-sm text-gray-500">JPG, PNG or PDF, file size no more than 10MB</p>
            <button className="bg-main-blue-400 text-white px-4 py-2 rounded-md hover:bg-main-blue-500">SELECT FILE</button>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button className="py-2 px-6 rounded-md text-main-blue-300 bg-white border border-gray-300 hover:bg-gray-50">
              Cancel
            </button>
            <button className="py-2 px-6 rounded-md text-white bg-main-blue-400 hover:bg-main-blue-500">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;