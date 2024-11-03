import type { Metadata } from "next";
import AdminPage from "../components/AdminPage";
import Link from "next/link";
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
               <div className='w-[90%] h-full bg-white rounded-[20px] flex flex-col items-center justify-start gap-[10px] px-[5%] py-[20px] '>
                    <div className='w-full flex items-center gap-[10px] justify-start py-[10px] ' >
                         <Link className='text-[0.8rem] font-bold text-gray-400 hover:text-main-blue-700 ' href={'/admin/institution'}>Add Institution</Link>
                         <Link className='text-[0.8rem] font-bold text-gray-400 hover:text-main-blue-700 ' href={'/admin/institution/institutions-management'}>Manage Institutions</Link>
                    </div>
                    {children}
               </div>
          </AdminPage>
  );
}