import React from 'react'
import { TbActivity } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import { GiFastNoodles } from "react-icons/gi";

export default function WhyChooseUsSection() {
  return (
<section class="overflow-hidden bg-white py-8 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Caafi Ku dooro</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
          CAAFI water Supply Company provide different type of service such Water Treatment that’s suitable for drinking.
          </p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">                
                <GiFastNoodles class="absolute left-1 h-7 w-7 text-pr-color"/> No Preservatives</dt>
              <dd class="inline"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <TbActivity class="absolute left-1 top-1 h-7 w-7 text-pr-color"/>
                All Vitamins
              </dt>
              <dd class="inline"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
               <MdHighQuality    class="absolute left-1 top-1 h-7 w-7 text-pr-color"/>Natural Quality</dt>
              <dd class="inline"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </dd>
            </div>
          </dl>
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#"
            class="transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80 focus:opacity-80 hover:text-white hover:bg-transparent border-2  hotext-white text-2xl font-medium px-4 py-2 rounded shadow">
            Hada Dalbo hada hel
          </a>
        
        </div>
      </div>
      <img src="/images/SectionImg1.jpg" alt="Product screenshot" class="w-[48rem] lg:h-[550px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"/>
    </div>
  </div>
</section>

  )
}
