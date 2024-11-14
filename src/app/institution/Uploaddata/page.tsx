'use client'

import { SelectInputGroup,DateInputGroup, TextInputGroup } from '../../../components/inputs/FormInputGroups'
import React from 'react';

const Page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start mt-4'>
      <form className='w-full flex flex-row pb-[10px] flex-wrap gap-[20px] justify-between'>
        
        <TextInputGroup label='Name:' id="st-name-input" cb={(res) => { console.log(res); }} width='w-full md:w-[40%]' placeholder='EdTech University' />
        <TextInputGroup label='Address:' id="st-Address-input" cb={(res) => { console.log(res); }} width='w-full md:w-[40%]' placeholder='xyz@gmail.com' />
        <TextInputGroup label='Degree:' id="st-Degree-input" cb={(res) => { console.log(res); }} width='w-full md:w-[40%]' placeholder='EU' />
        <TextInputGroup label='Phone Number:' id="st-number-input" cb={(res) => { console.log(res); }} width='w-full md:w-[40%]' placeholder='Miami, Kicukiro, Rwanda' />
        <DateInputGroup label='Completion Year:' id="st-completion-date-input" cb={(res) => { console.log(res); }} width='w-full md:w-[40%]' />

        {/* Using the new SelectInputGroup component for the dropdown */}
        <SelectInputGroup
          label='Field of Study:'
          id="field-of-study-input"
          cb={(res) => { console.log(res); }}
          width='w-full md:w-[40%]'
          options={['Computer Science', 'Engineering', 'Business Administration', 'Education', 'Medicine']}
        />

        <div className='w-full flex items-center gap-[10px] justify-end mt-4'>
          <button type="button" className='py-[5px] px-[20px] rounded-[5px] text-main-blue-300 bg-white shadow-md shadow-gray-200 text-[0.8rem] hover:shadow-gray-400 transition-all duration-200'>Cancel</button>
          <button type="submit" className='py-[5px] px-[20px] rounded-[5px] text-white bg-main-blue-400 shadow-md text-[0.8rem]'>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Page;


