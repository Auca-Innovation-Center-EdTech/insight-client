import ClientWrapper from "@/components/wrappers/ClientWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-main-blue-500 via-main-blue-600 to-main-blue-500" >
      <ClientWrapper>
        <HeroSection />
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
      <Image src={'/images/home-curve-1.svg'} width={200} height={200} alt="Curve 1" className="" />
      <Image src={'/images/home-curve-2.svg'} width={200} height={200} alt="Curve 2" />
    </section>
  )
}