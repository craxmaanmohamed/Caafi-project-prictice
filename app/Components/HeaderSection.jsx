import React from 'react'
import Image from 'next/image'
export default function HeaderSection() {
  return (
 <>

<div class="flex flex-wrap bg-pr-sectionB1 bg-cover p-5 bg-center ">
  
    <div class="sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold text-spr-color">Cab oo Ku cab <span class="text-pr-color">Caafi</span> Caafimaad</h1>
            <div class="w-20 h-2 bg-pr-color my-4"></div>
            <p class="text-xl mb-10 text-spr-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <button class="transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80 focus:opacity-80 hover:text-white hover:bg-transparent border-2  hotext-white text-2xl font-medium px-4 py-2 rounded shadow">Contac Us</button>
          </div>
        </header>
      </div>
    </div>
    <Image alt='SideImg' className=" rounded-3xl object-cover sm:h-screen sm:w-4/12" width={1000} height={10} src={"/images/HomeBg.png"}/>

  </div>

  </>
  )
}
