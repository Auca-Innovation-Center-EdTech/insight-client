'use client';

import Image from "next/image"
import { useRouter } from "next/navigation";

const LoginPage = () => {

     const router = useRouter();

     return (
          <body className="h-screen bg-gray-100 flex items-center justify-center">
               <div className="flex w-3/5 bg-white shadow-lg rounded-lg overflow-hidden">
               <div className="w-1/2 p-8">
                    <div className="flex flex-col items-center">
                    <Image width={40} height={40}  src="https://via.placeholder.com/50" alt="Insight Logo" className="mb-4" />
                    <h2 className="text-2xl font-bold text-blue-800 mb-2">INSIGHT</h2>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Welcome, Log into your account</h3>
                    <p className="text-sm text-gray-500 mb-8">It is our great pleasure to have you on board!</p>
                    
                    <form className="w-full">
                         <div className="mb-4">
                         <input type="text" placeholder="Enter your username" className="w-full px-4 py-2 border rounded-md text-sm text-gray-700" />
                         </div>
                         <div className="mb-4">
                         <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md text-sm text-gray-700" />
                         </div>
                         <div className="flex items-center justify-between mb-4">
                         <label className="flex items-center text-sm text-gray-600">
                         <input type="checkbox" className="form-checkbox text-blue-600" />
                         <span className="ml-2">Remember me</span>
                         </label>
                         <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password</a>
                         </div>
                         <button type="button" onClick={() => router.push("/admin")} className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900">Login</button>
                    </form>
                    
                    <p className="text-sm text-gray-500 mt-6">Need Help? <a href="#" className="text-blue-600 hover:underline">Help Desk</a></p>
                    </div>
                    
                    <footer className="flex justify-between mt-8 text-xs text-gray-400">
                    <p>© 2024 INSIGHT</p>
                    <div className="space-x-4">
                         <a href="#" className="hover:underline">Terms</a>
                         <a href="#" className="hover:underline">Privacy</a>
                         <a href="#" className="hover:underline">Cookies</a>
                    </div>
                    </footer>
               </div>
               
               <div className="w-1/2 bg-gradient-to-br from-blue-900 to-blue-600 text-white flex items-center justify-center">
                    <h1 className="text-5xl font-bold">INSIGHT</h1>
               </div>
               </div>
               
          </body>
     )
}

export default LoginPage;