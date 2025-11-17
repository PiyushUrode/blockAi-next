"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full pt-3 md:pt-0 overflow-x-hidden z-50 bg-black top-0 border-b border-none dark:border-gray-600 fixed">
      <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-0 px-4 md:p-4 md:px-8 z-50">

{/* Logo */}
<Link href="/" onClick={closeMenu}>
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
      src="/logo/blockailogo.png" 
      alt="ameri-coin"
      width={70} 
      height={70} 
      className="w-[3rem] sm:w-[7rem] h-auto"
      loading="lazy"
    />
  </div>
</Link>


        {/* Right Section */}
        <div className="flex md:order-2 sm:gap-5 space-x-4 md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-3 sm:gap-1 items-center bg-gradient-border rounded-md shadow-md p-[1px]">
            <button
              className="relative rounded-lg px-4 py-1 bg-black text-white transition-all duration-300 hover:scale-105"
              onClick={() => router.push("/")}
            >
              BUY NOW
            </button>
          </div>

          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-1 w-9 h-9 justify-center text-sm text-red-100 bg-gray-900 border border-[#00C6FF] rounded-lg md:hidden focus:outline-none hover:bg-gray-900"
          >
            <svg
              className="w-4 h-5"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <div
          id="navbar-sticky1"
          className={`items-center justify-center w-[99%] md:flex flex-col md:flex-row md:w-fit md:order-1 ${isNavVisible ? "block" : "hidden"}`}
        >
          <ul className="navcar flex flex-row flex-col md:flex-row overflow-x-hidden p-4 md:py-1.5 mt-4 font-medium font-montserrat md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:mt-0 md:border-0 text-[#ffffff] font-semibold">

            <li className="relative group">
              <Link href="#home" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 hover:text-white hover:bg-gray-700 md:hover:bg-transparent transition">
                  Home
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slider scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative group">
              <Link href="#features" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 hover:text-white hover:bg-gray-700 md:hover:bg-transparent transition">
                  Features
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slider scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative group">
              <Link href="#mission" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 hover:text-white hover:bg-gray-700 md:hover:bg-transparent transition">
                  Mission
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slider scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative group">
              <Link href="#tokenomics" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 hover:text-white hover:bg-gray-700 md:hover:bg-transparent transition">
                  Tokenomics
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slider scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative group">
              <Link href="#roadmap" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 hover:text-white hover:bg-gray-700 md:hover:bg-transparent transition">
                  Roadmap
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slider scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
