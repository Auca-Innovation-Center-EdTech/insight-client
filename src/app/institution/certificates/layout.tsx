import type { Metadata } from "next";
import AdminPage from "../components-c/InstitutionPage";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Insight",
  description: "Insight is an innovative Management Information System (MIS) launched to combat the growing issues of degree forgery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <AdminPage>
               <div className='w-[90%] h-full bg-white rounded-[20px] flex flex-col items-center justify-start gap-[10px] px-[3%] py-[20px] '>
                    <div className='w-full flex items-center gap-[10px] justify-start py-[10px] font-bold ' >
                         <h2>Import grades or transcript</h2>
                                             </div>
                    {children}
               </div>
          </AdminPage>
  );
}