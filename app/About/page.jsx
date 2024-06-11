import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { SiTransmission } from "react-icons/si";
import { TbDeviceVisionPro } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { GrBlockQuote } from "react-icons/gr";
import Image from 'next/image';

export default function page() {
  return (
    <>
      <div className='bg-AboutBackround rounded-b-3xl bg-cover bg-center h-72 flex justify-center items-center'>
        <h1 className=' text-white font-extrabold text-8xl uppercase'>About Us</h1>
      </div>
      {/* About start */}
      <section class="py-10  bg-gray-100 sm:py-16 lg:py-24">

        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <Image width={100} height={100} class="w-full rounded-md" src='/images/aboutus.jpg' alt="" />

              <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div class="overflow-hidden bg-white rounded">
                  <div class="px-10 py-6">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-3xl">100%</p>
                      <p class="pl-6 text-x font-medium text-black sm:text-lg">Safe water supply <br />to all Somali local </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>

              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">waa kuma Caafi</h2>
              <p class="mt-6 mb-10 text-lg leading-relaxed text-gray-600">Shirkadda biyaha CAAFI waxaa la aasaasay sanadkii 1999 waxaana lagu aasaasay caasimadda dalka ee magalada Muqdisho. Xarunta ugu wayn ee shirkadda waxay ku taalaa magaalada Muqclisho
                aagga loo yaqaano
                jidka warshadaha
                Shirkadda waxa ay shaqadeeda ku biloowday in ay biyo geliso
                degmooyin ka tirsan gobolka banaadir kuwaas oo kala ah
                AFI Water Supply Company was established in 1999 by a group of
                Somali businessmen after feeling poor water qual-ity in the operating
                areas.The company is working in Moga-dishu, Kismaayo and Baidoa.
                Main centre of AFI Water Supply Company located in Mogadishu that
                supplies water for three districts — namely:
                <span className='flex h-8 items-center'> <CiLocationOn className='h-6 w-6 text-pr-color' />Degmada Wardhiigleey</span>

                <span className='flex h-8 items-center'> <CiLocationOn className='h-6 w-6 text-pr-color' />Degmada Howl-wadaag
                </span>
                <span className='flex h-8 items-center'> <CiLocationOn className='h-6 w-6 text-pr-color' />Degmada Dayniile.</span>
              </p>
            </div>
          </div>
        </div>
      </section >
      {/* About end */}




      <div class="p-5  lg:p-10">
        <div class="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
          <div class="flex items-start  bg-gray-100 p-10  ">
            <TbDeviceVisionPro class="flex-shrink-0 w-16 h-16 text-pr-color " />

            <div class="ml-5">
              <h3 class="text-lg font-semibold text-black">Our Vission</h3>
              <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
          </div>

          <div class="flex items-start bg-gray-100 p-10 ">
            <SiTransmission class="flex-shrink-0 w-16 h-16 text-pr-color" />
            <div class="ml-5">
              <h3 class="text-lg font-semibold text-black">Our Mission</h3>
              <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
          </div>



        </div>
      </div>
      {/* impact start */}
      <section class="py-10 bg-gradient-to-r text-white from-pr-color to-spr-color sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <IoMdTimer class="flex-shrink-0 w-12 h-12 text-pr-color" />
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">25+</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <RiTeamLine class="flex-shrink-0 w-12 h-12 text-pr-color" />
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">100+</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Team members</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <MdEmojiTransportation class="flex-shrink-0 w-12 h-12 text-pr-color" />
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">23+</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Transport</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <BiSolidLike class="flex-shrink-0 w-12 h-12 text-pr-color" />
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">250k+</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* impact end */}

      <section id="testimonials" aria-label="What our customers are saying" class="bg-pr-sectionB1 bg-cover bg-center  py-8 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
      </div>
      <ul role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <GrBlockQuote width="105" height="78" class="absolute left-28 top-8 text-9xl fill-slate-100"/>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from
                    this site. The quality is exceptional and the prices are unbeatable.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Ahmed iise</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <Image width={100} height={100} alt="" class="h-14 w-14 object-cover" src="/images/person3.jpg"/>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <GrBlockQuote width="105" height="78" class="absolute left-28 top-8 text-9xl fill-slate-100"/>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">As a professional athlete, I rely on high-performance
                    gear for my training. This site offers a great selection of products.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Sahal Khaalid</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <Image width={100} height={100} alt="" class="h-14 w-14 object-cover" src="/images/person2.jpg"/>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <GrBlockQuote width="105" height="78" class="absolute left-28 top-8 text-9xl fill-slate-100"/>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">The fitness apparel I bought here fits perfectly and
                    feels amazing. this store to anyone looking for quality gear.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Faarah cabdi</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <Image width={100} height={100} alt="" class="h-14 w-14 object-cover" src="/images/person1.jpg"/>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
    </>
  )
}
