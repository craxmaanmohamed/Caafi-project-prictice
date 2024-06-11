import AboutSection from '@/app/Components/AboutSection'
import HeaderSection from '@/app/Components/HeaderSection'
import ImpactSection from '@/app/Components/ImpactSection'
import LatestNewsSection from '@/app/Components/LatestNewsSection'
import TestimonialSection from '@/app/Components/TestimonialSection'
import WhyChooseUsSection from '@/app/Components/WhyChooseUsSection'
import React from 'react'

export default function HomePage() {
  return (
    <>
    <HeaderSection/>
    <AboutSection/>
    <ImpactSection/>
    <WhyChooseUsSection/>
    <LatestNewsSection/>
    <TestimonialSection/>
    </>
  )
}
