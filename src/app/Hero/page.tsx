import Image from "next/image";

export default function Hero() {
  return (
    <div className="space-y-8 w-full h-screen mx-auto ">
      {/* Header */}
      <header className="flex flex-col w-full mx-auto justify-center ">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <div className="flex items-center object-cover">
              <Image
                src="/icon/Vector.jpg"
                alt="logo"
                width={20}
                height={20}
                className="flex items-center mt-[3px]"
              />
            </div>
            <h1 className="flex text-2xl text-black">
              <strong>Fashion</strong>
            </h1>
          </div>

          <nav className="flex items-center gap-7  ">
            <ul className="flex gap-7 items-center ">
              <li className="">CATALOGUE</li>
              <li className="">FASHION</li>
              <li className="">FAVOURITE</li>
              <li className="">LIFESTYLE</li>
            </ul>
            <div className="flex items-center">
              <button className="flex text-sm text-white bg-black rounded-md p-2 px-3">
                SIGN UP
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="flex justify-center items-center w-full bg-slate-100 pt-4 rounded-3xl h-96 ">
        <div className="flex flex-1  flex-col justify-center gap-5 w-full h-48 mt-2 mb-14 ml-14">
        <div className="flex text-4xl text-black font-bold ">
          <strong className="space-y-2">
          <h2 className="bg-white ml-[-10px] pl-[10px]">LET'S</h2>
          <h2>EXPLORE</h2>
          <h2 className="bg-[#EBD96B] ml-[-10px] pl-[10px]">UNIQUE</h2>
          <h2>CLOTHES.</h2>
          </strong>
        </div>
          

          <div>
            <h2>Live for Influential and Innovative fashion!</h2>
          </div>

          <div className="flex">
            <button className="flex text-sm text-white bg-black rounded-md p-2 px-3">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="flex flex-1 w-full justify-center items-center mr-8 mt-3">
          <Image
            src="/images/banner.png"
            alt="Banner"
            width={500}
            height={600}
            className=" flex object-cover"
          />
        </div>
      </div>

    </div>
  );
}
