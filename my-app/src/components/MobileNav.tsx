"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { navList } from '@/components/data';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function MobileNav() {
    const pathName = usePathname();
    return (
        <>
        <Sheet>
            <SheetTrigger><CiMenuFries className='text-accent text-3xl font-extrabold'/></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle className='font-bold text-3xl text-white mx-auto my-16'>
                    <Link href='/'>Luke<span className='text-accent'>.</span></Link>
                </SheetTitle>
                <SheetDescription className="flex flex-col gap-6 items-center">
                    {
                        navList.map((list)=>(
                            <div key={list.id}>
                                <Link href={list.href} className={`hover:text-accent text-base pb-1 ${pathName === list.href ? 'text-accent' : 'text-white'} transition-all relative`}>
                                    {pathName === list.href && (
                                        <span className='absolute left-0 h-[2px] top-full w-full bg-accent'/>
                                    )}
                                    {list.title}
                                </Link>
                            </div>
                        ))
                    }
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        </>
    )
}
