"use client"
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

type PageTransitionProps = {
    children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
    const pathName = usePathname()
    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{opacity: 1}}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }
                    }}
                    className='bg-primary w-screen h-screen fixed top-0 left-0 pointer-events-none'
                />
                {children}
            </div>
        </AnimatePresence>
    );
}
