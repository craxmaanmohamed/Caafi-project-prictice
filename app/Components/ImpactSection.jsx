import React from 'react'
import { IoMdTimer } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

export default function ImpactSection() {
  return (
    <section class="py-10 bg-gradient-to-r text-white from-pr-color to-spr-color sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <IoMdTimer  class="flex-shrink-0 w-12 h-12 text-pr-color"/>
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
                        <MdEmojiTransportation class="flex-shrink-0 w-12 h-12 text-pr-color"/>
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
                        <BiSolidLike class="flex-shrink-0 w-12 h-12 text-pr-color"/>
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


  )
}
