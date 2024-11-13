'use client'

import { DateInputGroup, TextInputGroup } from '../../../components/inputs/FormInputGroups'

import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'

const Page = () => {
     return (
          <div className='w-full flex flex-col items-center justify-start'>
               <form className='w-full flex flex-row pb-[10px] flex-wrap gap-[20px]  justify-between'>
                    <div className='w-full border-[1.5px] bg-gray-100 border-gray-300 border-dashed rounded-[20px] py-[20px] flex flex-col items-center gap-[10px] '>
                         <i className='text-[80px] text-gray-300 '><IoCloudUploadOutline /></i>
                         <p className='text-[0.8rem] text-gray-800 font-bold '>Drag & drop Photo or <span className='underline text-main-blue-700 cursor-pointer'>Browser</span></p>
                         <p className='text-[0.7rem] text-gray-400 '>Supported formats: JPEG, PNG</p>
                    </div>
                    <TextInputGroup label='Institution Name:' id="institution-name-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='EdTech University' />
                    <TextInputGroup label='Email:' id="institution-email-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='xyz@gmail.com' />
                    <DateInputGroup label='Registration Date:' id="institution-regi-date-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' />
                    <TextInputGroup label='Institution Abbreviation:' id="institution-abbr-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='EU' />
                    <TextInputGroup label='Permanent Address:' id="institution-address-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='Miami, Kicukiro, Rwanda' />
                    <TextInputGroup label='City:' id="institution-city-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='Kigali' />
                    <TextInputGroup label='Postal code:' id="institution-postal-code-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='45962' />
                    <TextInputGroup label='Country:' id="institution-name-input" cb={(res) => {console.log(res)}} width='w-full md:w-[40%]' placeholder='Rwanda' />
                    
                    <div className='w-full flex items-center gap-[10px] justify-end'>
                         <button className='py-[5px] px-[20px] rounded-[5px] text-main-blue-300 bg-white shadow-md shadow-gray-200 text-[0.8rem] hover:shadow-gray-400 transition-all duration-200 '>Cancel</button>
                         <button className='py-[5px] px-[20px] rounded-[5px] text-white bg-main-blue-400 shadow-md text-[0.8rem] '>Next</button>
                    </div>
               </form>
          </div>
     )
}




export default Page