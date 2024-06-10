
import React from 'react'
import { FcAbout } from "react-icons/fc";
export default function AboutSection() {
  return (
    <>
    <section  class="py-10  bg-gray-100 sm:py-16 lg:py-24">
    
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
                <img class="w-full rounded-md" src='/images/aboutus.jpg' alt="" />

                <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                    <div class="overflow-hidden bg-white rounded">
                        <div class="px-10 py-6">
                            <div class="flex items-center">
                                <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-3xl">100%</p>
                                <p class="pl-6 text-x font-medium text-black sm:text-lg">Safe water supply <br/>to all Somali local </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <FcAbout class="w-8 h-8 bg-white"/>
                </div>
                <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">waa kuma Caafi</h2>
                <p class="mt-6 mb-10 text-lg leading-relaxed text-gray-600">Shirkadda biyaha CAAFI waxaa la aasaasay sanadkii 1999 waxaana lagu aasaasay caasimadda dalka ee magalada Muqdisho. Xarunta ugu wayn ee shirkadda waxay ku taalaa magaalada Muqclisho..</p>
                <a href="#" title="" class="transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80 focus:opacity-80 hover:text-white hover:bg-transparent border-2  hotext-white text-2xl font-medium px-4 py-2 rounded shadow"role="button"> Learn more </a>
            </div>
        </div>
    </div>
</section >
</>
  )
}
