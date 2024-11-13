import ClientWrapper from "@/components/wrappers/ClientWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-main-blue-500 via-main-blue-600 to-main-blue-500" >
      <ClientWrapper>
        <HeroSection />
        <HomeTeamsSection />
        <HomeAboutSection />
        <HomeContactSection />
      </ClientWrapper>
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[10px] py-[50px] relative" >
      <Link href={'/'} className="text-[0.7rem] text-main-gold-500 border-[1.2px] border-main-black-200  font-medium py-[10px] px-[20px] rounded-[30px] hover:bg-main-blue-500 transition-all duration-300 " >Get your Free Consultation Now</Link>
      <h2 className="text-[1.8rem] font-bold text-main-blue-100 text-center w-1/3 ">Building Trust through Digital integrity</h2>
      <p className="text-main-black-200 text-[0.8rem] text-center ">Insight is a PKI-powered digital degree issuance system</p>
      <Link href={'/'} className="py-[5px] px-[15px] rounded-[30px] text-main-blue-100 border-[1.3px] text-[0.8rem] border-main-blue-300 bg-main-blue-300 hover:bg-main-blue-400" >Get Started</Link>
      <Image src={'/images/home-curve-1.svg'} width={70} height={70} alt="Curve 1" className="absolute bottom-[100px] left-[25%]" />
      <Image src={'/images/home-curve-2.svg'} width={100} height={100} alt="Curve 2" className="absolute top-[10px] right-[20%]" /> 
    </section>
  )
}

const HomeTeamsSection = () => {
  return (
    <section className="w-[95%] bg-[#0A92dd14] shadow-md shadow-main-blue-700 mx-auto rounded-[10px] grid grid-cols-1 md:grid-cols-2 py-[10px] px-[5%] gap-[10px] items-center ">
      <div className="flex flex-col items-start gap-[20px] w-full">
        <h2 className="text-[2.6rem]  font-bold text-white ">Where teams build better technology skills, faster</h2>
        <p className="text-[1.2rem] font-light text-gray-400 ">Insight is an innovative Management Information System (MIS) launched to combat the growing issues of degree forgery.</p>
        <button className="px-[10px] py-[5px] rounded-[30px] text-[0.8rem] text-white bg-main-blue-400 hover:bg-main-blue-300  " >Get Started</button>
      </div>
      <Image src={'/images/home-section-1-image.svg'} width={800} height={500} alt="where teams build"  className="w-[90%] mx-auto h-auto object-fill" />
    </section>
  )
}

const HomeAboutSection = () => {
  return (
    <section className="w-[95%]  flex items-center bg-[#17165c50] rounded-[10px] overflow-hidden ">
      <div className="w-[60%] py-[20px] px-[5%] ">
        <p className="text-[1.4rem] font-bold text-gray-400 ">We are committed to Fightng credential forgery in Rwanda&apos;s education and healthcare sectors. With recent data showing numerous cases of fake displomas, our system provides a secure and efficient digital platform to verify academic credential ensuring trust and transparency.</p>
      </div>
      <Image src={'/images/home-about-image.png'} width={800} height={800} alt="about-image" className="w-[40%] rounded-[10px] aspect-[100/60]  object-cover " />
    </section>
  )
}

const HomeContactSection = () => {
  return (
    <section className="w-full py-[20px] px-[2.5%] gap-[20px] flex justify-between items-start ">
      <Image src={'/images/contact-section-image.png'} width={800} height={800} alt="contact-us image" className="w-[50%] aspect-[100/50] rounded-[5px] object-cover" />
      <div className="w-[45%] flex flex-col gap-[20px]  ">
        <div className="w-full flex flex-col gap-[5px] ">
          <h4 className="text-[1.2rem] text-white font-bold ">GET IN TOUCH</h4>
          <p className="text-[0.9rem] text-gray-400 " >24/7 We will Answer Your Questions & Problems</p>
        </div>
        <form className="w-full flex flex-row flex-wrap gap-[10px] justify-between">
          <div className="w-[40%] border-[1.4px] border-gray-500 p-[5px] rounded-[5px] flex items-center gap-[5px] justify-start " >
            <label htmlFor="message_first_name" className="text-gray-400"><FaRegUser /> <span className="hidden">First name</span></label>
            <input type="text" name="message_first_name" id="message_first_name" placeholder="First Name" className="w-full bg-transparent placeholder:text-gray-500 p-x[5px] py-[2.5px] outline-none border-none text-main-blue-100 text-[0.8rem] " />
          </div>
          <div className="w-[40%] border-[1.4px] border-gray-500 p-[5px] rounded-[5px] flex items-center gap-[5px] justify-start " >
            <label htmlFor="message_last_name" className="text-gray-400"><FaRegUser /> <span className="hidden">Last name</span></label>
            <input type="text" name="message_last_name" id="message_last_name" placeholder="Last Name" className="w-full bg-transparent placeholder:text-gray-500 p-x[5px] py-[2.5px] outline-none border-none text-main-blue-100 text-[0.8rem] " />
          </div>
          <div className="w-full border-[1.4px] border-gray-500 p-[5px] rounded-[5px] flex items-center gap-[5px] justify-start " >
            <label htmlFor="message_email_name" className="text-gray-400 text-[24px]"><MdOutlineEmail /> <span className="hidden">Email</span></label>
            <input type="text" name="message_email_name" id="message_email_name" placeholder="Email" className="w-full bg-transparent placeholder:text-gray-500 p-x[5px] py-[2.5px] outline-none border-none text-main-blue-100 text-[0.8rem] " />
          </div>
          <div className="w-full border-[1.4px] border-gray-500 p-[5px] rounded-[5px] flex items-center gap-[5px] justify-start " >
            <label htmlFor="message_phone_name" className="text-gray-400 text-[24px]"><IoPhonePortraitOutline /> <span className="hidden">phone</span></label>
            <input type="text" name="message_phone_name" id="message_phone_name" placeholder="Phone" className="w-full bg-transparent placeholder:text-gray-500 p-x[5px] py-[2.5px] outline-none border-none text-main-blue-100 text-[0.8rem] " />
          </div>
          <div className="w-full " >
            <label htmlFor="message-text" className="hidden">Message:</label>
            <textarea name="message-text" id="message-text" className="w-full border-[1.4px] border-gray-500 p-[5px] rounded-[5px] bg-transparent resize-none placeholder:text-[0.8rem] text-[0.8rem] text-main-blue-100 outline-none " cols={10} rows={4} placeholder="Describe your issue..."></textarea>
          </div>
          <button className="w-full rounded-[5px] py-[10px] bg-main-blue-400 text-[0.8rem] font-bold text-white hover:bg-main-blue-300 ">Send</button>
        </form>
      </div>
    </section>
  )
}