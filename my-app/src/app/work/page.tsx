"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperInstance } from 'swiper'
import { projects } from '@/components/data'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Image from 'next/image'
import WorkSliderBtn from '@/components/WorkSliderBtn'
import "swiper/css"

export default function Page() {
  const [project, setProject] = useState(projects[0])
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
      className='h-full py-10 flex flex-col justify-center'
    >
      <div className='container mx-auto xl:px-10'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-center gap-7 order-2 xl:order-none'>
            <div className='border-b border-white/20'>
              <div className='text-7xl font-extrabold text-transparent text-stroke'>
                {project.num}
              </div>
              <div className='text-3xl font-bold my-5 capitalize group-hover:text-accent transition-all duration-500'>
                {project.category} project
              </div>
              <div className='text-sm text-white/60 leading-loose'>
                {project.description}
              </div>
              <div className='flex gap-3 my-4'>
                {project.stack.map((item, index) => (
                  <span key={index} className='text-accent font-bold'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='rounded-full p-3 bg-[#27272c] text-2xl group'>
                      <BsArrowUpRight className='text-white group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent className='bg-white/30 p-1 rounded-sm'>
                      <p className='text-black text-xs'>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='rounded-full p-3 bg-[#27272c] text-2xl group'>
                      <BsGithub className='text-white group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent className='bg-white/30 p-1 rounded-sm'>
                      <p className='text-black text-xs'>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className='w-full xl:w-[50%] xl:mb-0 mb-12 relative'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className='xl:h-[520px]'
              onSlideChange={handleSlideChange}
              onSwiper={setSwiperInstance}
            >
              {
                projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className='w-full'>
                      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                        <Image src={project.image} alt='' fill className='object-cover' />
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <WorkSliderBtn swiper={swiperInstance} 
              containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
