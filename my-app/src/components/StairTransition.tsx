"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const stairsVariance = {
    initial: { top: '0%' },
    animate: { top: '100%' },
    exit: { top: '0%' },
}

export default function StairTransition() {
    const pathName = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathName}>
                <div className='flex fixed w-screen h-screen top-0 right-0 left-0 z-40 pointer-events-none'>
                    {Array(6).fill(1).map((_, index) => (
                        <motion.div 
                            key={index}
                            variants={stairsVariance}
                            animate='animate'
                            initial='initial'
                            exit='exit'
                            transition= {{
                                delay: index * 0.1,
                                ease: 'easeInOut',
                                duration: 0.4 
                            }}
                            className='bg-white h-full w-full relative'
                        />
                    ))}
                </div>
                <motion.div initial={{opacity: 1}} animate={{opacity: 0}} 
                    transition={{
                        duration: 0.4,
                        delay: 1,
                        ease: 'easeInOut'
                    }}
                    className='bg-primary w-screen h-screen pointer-events-none fixed top-0 left-0'
                />
            </div>
        </AnimatePresence>
    )
}
