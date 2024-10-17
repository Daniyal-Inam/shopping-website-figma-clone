import Hero from "./Hero/page";
import Image from "next/image";
import Voucher from "@/app/Vouchers/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex p-4 px-9 ">
        <Hero />
      </div>
              {/* Slide Brands Logo */}
      <div className="flex w-full -mt-44">
        
          <Image
            src="/images/Brands.png"
            alt="Brands Logo"
            width={1000}
            height={0}
            className="object-contain"
          />
        </div>

      

      <br />
      <div className="flex justify-center items-center p-4 px-9">
        <Image
          src="/images/New Arrivals.png"
          alt="New Arrivals"
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>

      {/* Re Banner */}
      <div className="flex mt-20 w-full h-96 bg-[#E0C340]">
        <div className="flex-1 justify-center items-center h-screen">
          <Image
            src="/images/girl.png"
            alt="New Arrivals"
            width={650}
            height={400}
            className="object-cover"
          />
        </div>

        <div className="h-screen flex-1">
        <div className=" bg-[#E0C340] pl-4 pt-20 items-center justify-center h-[491px] ">
          <h2 className="flex text-black bg-white text-6xl font-bold w-[267px] -pl-2">
            <strong>PAYDAY</strong>
          </h2>
          <h2 className="flex text-black text-6xl font-bold">
            <strong>SALE NOW</strong>
          </h2>
          <br />
          <h2 className="flex break-words">
            Spend minimal $100 get 30% off <br /> voucher code for yournext purchase
          </h2>
          <br />
          <h2 className="font-bold">1 June - 10 June 2021</h2>
          <h2>*Terms & Conditions apply</h2>
          <br />
          <button className="flex text-sm text-white bg-black rounded-md p-2 px-3">
            SHOP NOW
          </button>
        </div>
      </div>
      </div>

      {/* Youngs Favourite */}
      <div className="flex justify-center items-center mt-56 mb-20 p-4 px-9">
        <Image src="/images/Youngs Favourite.png" alt="Youngs Favourite" width={1000} height={1000} className="object-cover"/>
      </div>

      <div className=" flex w-full h-screen ">
        <Voucher />
      </div>
      
      <div className="max-w-full max-h-screen mt-8">
        <Footer />
      </div>


    </div>
  );
}
