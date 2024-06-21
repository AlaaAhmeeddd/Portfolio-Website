import Service from '@/components/Service'
import { servicesData } from '@/components/data'
import React from 'react'

export default function page() {
  return (
    <div className='h-full xl:py-14 py-8'>
      <div className='container mx-auto xl:px-10'>
        <Service servicesObj={servicesData}/>
      </div>
    </div>
  )
}
