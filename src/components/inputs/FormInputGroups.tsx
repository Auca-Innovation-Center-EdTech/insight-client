'use client';

import React from 'react';

interface IInputGroup {
  label: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  width?: string;
  id: string;
  cb: (res: string | number) => unknown;
}

interface SelectInputGroupProps extends IInputGroup {
  options: string[];
  defaultOption?: string;
}

export const TextInputGroup: React.FC<IInputGroup> = ({ label, placeholder, id, cb, width = "150%" }) => {
  return (
    <div className={`${width} flex flex-col items-start gap-[5px]`}>
      <label className="text-[0.8rem] text-gray-700 font-semibold" htmlFor={id}>{label}</label>
      <input type="text" className="w-full py-[5px] px-[10px] rounded-[10px] placeholder:text-[0.8rem] text-[0.8rem] placeholder:text-gray-300 border-[1.3px] border-gray-300 outline-none focus:border-main-blue-400 text-gray-600 focus:text-main-blue-400" name={id} id={id} placeholder={placeholder} onChange={(e) => cb(e.target.value)} />
    </div>
  );
};

export const DateInputGroup: React.FC<IInputGroup> = ({ label, id, width = "100%", cb }) => {
  return (
    <div className={`${width} flex flex-col items-start gap-[5px]`}>
      <label className="text-[0.8rem] text-gray-700 font-semibold" htmlFor={id}>{label}</label>
      <input type="date" className="w-full py-[5px] px-[10px] rounded-[10px] placeholder:text-[0.8rem] text-[0.8rem] placeholder:text-gray-300 border-[1.3px] border-gray-300 outline-none focus:border-main-blue-400 text-gray-600 focus:text-main-blue-400" name={id} id={id} onChange={(e) => cb(e.target.value)} />
    </div>
  );
};

export const SelectInputGroup: React.FC<SelectInputGroupProps> = ({ label, id, width = "100%", cb, options, defaultOption  }) => {
  return (
    <div className={`${width} flex flex-col items-start gap-[5px]`}>
      <label className="text-[0.8rem] text-gray-700 font-semibold" htmlFor={id}>{label}</label>
      <select
        id={id}
        className="w-full py-[5px] px-[10px] rounded-[10px] text-[0.8rem] text-gray-600 border-[1.3px] border-gray-300 outline-none focus:border-main-blue-400 focus:text-main-blue-400"
        onChange={(e) => cb(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>{defaultOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
