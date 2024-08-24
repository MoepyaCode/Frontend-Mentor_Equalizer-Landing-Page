import React from 'react'
import Container from '../container'
import Wrapper from '../wrapper'
import { Assets } from '../../assets'

export default function Body() {
    return (
        <Container className='z-10  flex flex-col gap-[166px] md:gap-[250px] xl:gap-[321px] mb-[390px] md:mb-[183px] 2xl:self-center 2xl:max-w-[1110px]'>
            <Wrapper className='px-[24px] md:px-0 text-[#191826] flex flex-col gap-[20px] md:gap-[28px] xl:gap-[40px] md:w-[70%] xl:w-[80%]'>
                <h1 className='font-bold text-[40px] md:text-[64px] xl:text-[88px] leading-[48px] md:leading-[64px] xl:leading-[88px] tracking-[-0.45px] md:tracking-[-0.73px]'>
                    We make your music sound extraordinary.
                </h1>
                <p className='md:text-[18px] xl:text-[20px] leading-[26px] md:leading-[28px] xl:leading-[34px]'>
                    A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
                </p>
            </Wrapper>

            <Wrapper className='relative bg-[#191826] rounded-[12px] min-h-[600px] flex flex-col justify-start items-center '>
                <img className='object-contain max-h-[420px] relative top-[-31px]' src={Assets.bgPattern2} alt="" />

                <img className='absolute top-[-98px] md:top-[-138px] xl:top-[-213px] md:left-[64px] xl:left-[102px] max-h-[430px] md:max-h-[556px] xl:max-h-[643px]' src={Assets.illustractionApp} alt="" />

                <Wrapper className='absolute bottom-[-326px] md:bottom-[-96px] md:right-[56px] rounded-[12px] bg-[#FA7453] text-[#FCFAF9] w-full md:max-w-[400px] xl:max-w-[446px] px-[36px] py-[48px] md:p-[48px] xl:px-[58px]'>
                    <h2 className='font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[52px] mb-[12px] xl:mb-[22px]'>
                        Premium EQ
                    </h2>

                    <p className='text-[18px] xl:text-[20px] leading-[28px] xl:leading-[34px] mb-[32px] md:mb-[39px]'>
                        Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!
                    </p>

                    <div className='flex items-center gap-[16px] md:gap-[20px] mb-[32px] xl:mb-[46px]'>
                        <span className='font-bold text-[65px] leading-[52px]'>$4 </span>
                        <span className='text-[20px] leading-[32px] tracking-[-0.2px]'>
                            / month
                        </span>
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <button className='bg-[#191826] h-[61px] rounded-[12px] flex justify-center items-center gap-[8px]'>
                            <img src={Assets.iconApple} alt="" />
                            <span className='font-bold text-[18px] leading-[32px] tracking-[-0.18px]'>iOS Download</span>
                        </button>

                        <button className='bg-[#FCFAF9] h-[61px] rounded-[12px] flex justify-center items-center gap-[8px]'>
                            <img src={Assets.iconAndroid} alt="" />
                            <span className='font-bold text-[#191826] text-[18px] leading-[32px] tracking-[-0.18px]'>Android Download</span>
                        </button>

                    </div>
                </Wrapper>
            </Wrapper>
        </Container>
    )
}