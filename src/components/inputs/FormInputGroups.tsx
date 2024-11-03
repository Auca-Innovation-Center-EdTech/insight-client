'use client'

interface IInputGroup {
     label: string
     placeholder?: string
     cols?:number
     rows?:number
     width?:string
     id:string
     cb: (res: string | number ) => unknown 
}

export const TextInputGroup: React.FC<IInputGroup> = ({label,placeholder,id, cb, width="100%"}) => {
     return (
          <div className={`${width} flex flex-col items-start gap-[5px]`}>
               <label className="text-[0.8rem] text-gray-700 font-semibold" htmlFor={id}>{label}</label>
               <input type="text" className="w-full py-[5px] px-[10px] rounded-[10px] placeholder:text-[0.8rem] text-[0.8rem] placeholder:text-gray-300 border-[1.3px] border-gray-300 outline-none focus:border-main-blue-400 text-gray-600 focus:text-main-blue-400" name={id} id={id} placeholder={placeholder} onChange={(e) => cb(e.target.value)} />
          </div>
     )
}

export const TextAreaInputGroup: React.FC<IInputGroup> = ({label, placeholder, id, cb, width="100%", cols=10, rows=5}) => {
     return(
          <div className={`${width} flex flex-col items-start gap-[5px]`} >
               <label htmlFor={id} className="text-[0.8rem] text-gray-700 font-semibold" >{label}</label>
               <textarea className="w-full py-[5px] px-[10px] rounded-[10px] placeholder:text-[0.8rem] text-[0.8rem] placeholder:text-gray-300 border-[1.3px] border-gray-300 outline-none focus:border-main-blue-400 text-gray-600 focus:text-main-blue-400" name={id} cols={cols} rows={rows} id={id} placeholder={placeholder} onChange={(e) =>  cb(e.target.value)} ></textarea>
          </div>
     )
}

export const DateInputGroup: React.FC<IInputGroup> = ({label, id,width="100%", cb}) => {
     return(
          <div className={`${width} flex flex-col items-start gap-[5px]`}>
               <label className="text-[0.8rem] text-gray-700 font-semibold" htmlFor={id}>{label}</label>
               <input type="date" className="w-full py-[5px] px-[10px] rounded-[10px] placeholder:text-[0.8rem] text-[0.8rem] placeholder:text-gray-300 border-[1.3px] border-gray-300 outline-none focus:border-main-blue-400 text-gray-600 focus:text-main-blue-400" name={id} id={id} onChange={(e) => cb(e.target.value)} />
          </div>
     )
}