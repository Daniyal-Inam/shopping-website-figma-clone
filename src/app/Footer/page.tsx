import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-screen">
     <div className="flex flex-col justify-center items-center text-center text-3xl lg:w-full bg-[#E5C643] text-white h-1/2">
  <h2 className="font-bold px-12">
    <strong>JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</strong>
  </h2>
  <h2 className="mt-4">
    Type your email down below and be young wild generation
  </h2>
  
  <div className="flex justify-center items-center mt-6">
    <div className="relative w-full max-w-xs">
      <input 
        type="email" 
        placeholder="Add your email here"  
        className="rounded-md p-3 pr-24 w-full text-black" 
      />
      <button 
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white bg-black py-2 px-4 rounded-md text-lg">
        SEND
      </button>
    </div>
  </div>
</div>

      <div className="w-full px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-black justify-center h-1/2 space-y-5">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left space-y-5">
          {/* <div className="flex flex-col justify-center w-full h-1/2 space-y-5 bg-black p-16 "> */}
          <h2 className=" text-white font-bold text-3xl">FASHION</h2>
          <p className="text-gray-400">
            Complete your style with awesome <br /> clothes from us.
          </p>

          <div className="flex gap-3 ">
            <Link href={""}>
              {" "}
              <FaFacebookF className="bg-[#EBD96B] text-black w-7 h-6 p-1 rounded-md" />
            </Link>

            <Link href={""}>
              {" "}
              <FaInstagram className="bg-[#EBD96B] text-black w-7 h-6 p-1 rounded-md" />
            </Link>

            <Link href={""}>
              {" "}
              <FaTwitter className="bg-[#EBD96B] text-black w-7 h-6 p-1 rounded-md" />
            </Link>

            <Link href={""}>
              {" "}
              <FaLinkedinIn className="bg-[#EBD96B] text-black w-7 h-6 p-1 rounded-md" />
            </Link>
          </div>
        </div>

        <div className="lg:w-full md:w-1/2 px-4">
          <h2 className="title-font font-medium text-[#D9D9D9] tracking-widest text-sm mb-3">
            Company
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">About</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Cotact US</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Support</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Careers</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-[#D9D9D9] tracking-widest text-sm mb-3">
            Quick Link
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Share Location
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Orders Tracking
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Size Guide</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">FAQs</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-[#D9D9D9] tracking-widest text-sm mb-3">
            Legal
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Terms & conditions
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}
