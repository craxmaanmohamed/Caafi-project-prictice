"use client"
import React, { useState,Link } from 'react';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare ,FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter ,FaSquareYoutube} from "react-icons/fa6";


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
          <img src="/images/caafiLogo.png" alt="logo" className="w-14 h-14" />
        </a>


        <div >

          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block fixed lg:static top-0 left-0 lg:w-auto w-1/2 min-w-[300px]  h-full lg:h-auto bg-white lg:bg-transparent p-6 lg:p-0 shadow-md lg:shadow-none overflow-auto z-50`}>
            <button onClick={toggleMenu} className="lg:hidden fixed top-2 right-4 z-[100]  rounded-full bg-white p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
              </svg>
            </button>

            <ul className="lg:flex lg:h-14 lg:items-center  lg:gap-x-5 max-lg:space-y-3">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-pr-color block font-bold text-[15px]">Home</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-pr-color text-[#333] block font-bold text-[15px]">About</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-pr-color text-[#333] block font-bold text-[15px]">Services</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-pr-color text-[#333] block font-bold text-[15px]">Blog</a>
              </li>
              <li className="max-lg:border-b rounded-sm hover:bg-transparent border-2 transition-all duration-500 border-pr-color max-lg:py-3 px-3  bg-pr-color">
                <a href="#" className="hover:text-pr-color text-white p-2 block font-bold text-[15px]">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
