import React from 'react'
import { MdWaterDamage } from "react-icons/md";
import { GiWaterMill ,GiWaterGallon} from "react-icons/gi";

export default function page() {
  return (
    
    <>
      <div className='bg-ServiceBackround rounded-b-3xl  bg-cover bg-center h-72 flex justify-center items-center'>
        <h1 className=' text-white font-extrabold text-6xl md:text-8xl uppercase'>Service</h1>
      </div>
    {/* services start */}
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                    <MdWaterDamage class="w-16 h-16 text-pr-color"/>
                    <h3 class="mt-8 text-lg font-semibold text-black">Home water</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                <GiWaterMill class="w-16 h-16 text-pr-color"/>

                    <h3 class="mt-8 text-lg font-semibold text-black">Market water</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                <GiWaterGallon class="w-16 h-16 text-pr-color"/>

                    <h3 class="mt-8 text-lg font-semibold text-black">Personal water</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>
    </div>
</section>

    {/* services end */}

    </>
  )
}
