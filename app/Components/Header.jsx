"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare ,FaInstagram,FaTimes} from "react-icons/fa";
import { FaSquareXTwitter ,FaSquareYoutube} from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      <section className="py-2 flex justify-between gap-5 bg-spr-color text-white  px-10">
        <div className='flex gap-2'>
          <span className='flex h-6 justify-center items-center font-bold'><IoIosCall className='h-6 w-6' /> 3366</span>
          <span className='flex h-6 justify-center items-center font-bold'><MdOutlineMailOutline className='h-6 w-6' />  info@caafi.so</span>
        </div>

      <div className='flex gap-1'>
        <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaFacebookSquare className='h-6 w-6' /> <a href="https://www.facebook.com/AfiWaterSupply"></a></span>
        <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaSquareXTwitter className='h-6 w-6' /> <a href="#"></a></span>
        <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaSquareYoutube className=' h-6 w-6' /> <a href="#"></a></span>
        <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaInstagram className='h-6 w-6' /> <a href="#"></a></span>
      </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-2 bg-white min-h-[70px]">
        <a href="#">
          <Image width={100} height={100}  src="/images/caafiLogo.png" alt="logo" className="w-14 h-14" />
        </a>


        <div >

          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block fixed lg:static top-0 left-0 lg:w-auto w-1/2 min-w-[300px]  h-full lg:h-auto bg-white lg:bg-transparent p-6 lg:p-0 shadow-md lg:shadow-none overflow-auto z-50`}>
            <button onClick={toggleMenu}  className="lg:hidden border-2 border-pr-color fixed top-2 right-4 z-[100]  rounded-full bg-white p-3">
              <FaTimes  className="w-5 h-5  fill-black" />
            </button>

            <ul className="lg:flex lg:h-14 lg:items-center  lg:gap-x-5 max-lg:space-y-3">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="/" onClick={toggleMenu} className="hover:text-pr-color block font-bold text-[15px]">Home</Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="About" onClick={toggleMenu} className="hover:text-pr-color text-[#333] block font-bold text-[15px]">About</Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="Services" onClick={toggleMenu} className="hover:text-pr-color text-[#333] block font-bold text-[15px]">Services</Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="Blog" onClick={toggleMenu} className="hover:text-pr-color text-[#333] block font-bold text-[15px]">Blog</Link>
              </li>
              <li className="max-lg:border-b rounded-sm hover:bg-transparent border-2 transition-all duration-500 border-pr-color max-lg:py-3 px-3  bg-pr-color">
                <Link href="Contact" onClick={toggleMenu} className="hover:text-pr-color text-white p-2 block font-bold text-[15px]">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
          <FiMenu  className="w-8 h-8 fill-black" />
          </button>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
