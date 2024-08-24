import React from 'react'
import { Assets } from '../../assets'

export default function Footer() {
  return (
    <footer className='px-[24px] md:px-0 flex flex-col xl:flex-row xl:gap-[137.76px] gap-[32px] 2xl:self-center 2xl:max-w-[1110px] 2xl:w-full'>
      <img className='object-contain h-[32px] self-start' src={Assets.logo} alt="" />

      <div className='flex flex-col flex-nowrap md:flex-row md:justify-between gap-[64px] text-[#191826] xl:w-full'>
        <p className='leading-[26px] md:max-w-[366px]'>
          All rights reserved © Equalizer 2021
          Have any problems? Contact us via social media or email us at <span className='font-bold'>equalizer@example.com</span>
        </p>

        <div className='flex flex-nowrap items-center gap-[20px]'>
          <img className='object-contain' src={Assets.iconFacebook} alt="" />
          <img className='object-contain' src={Assets.iconInstagram} alt="" />
          <img className='object-contain' src={Assets.iconTwitter} alt="" />
        </div>
      </div>
    </footer>
  )
}
