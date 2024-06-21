"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { navList } from './data'

export default function NavList() {
    const pathName = usePathname();
    return(
        <div className='flex gap-6'>
            {
                navList.map((list)=>(
                    <div key={list.id}>
                        <Link href={list.href} className={`hover:text-accent pb-1 ${pathName === list.href && 'text-accent'} transition-all relative`}>
                            {pathName === list.href && (
                                <span className='absolute left-0 h-[2px] top-full w-full bg-accent'/>
                            )}
                            {list.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

