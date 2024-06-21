import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import NavList from './NavList'
import MobileNav from './MobileNav'


export default function Header() {
    return (
        <header className='xl:py-10 py-8'>
            <div className='container flex justify-between items-center mx-auto xl:px-10'>
                <Link href="/">
                    <h1 className='font-bold text-4xl'>Luke<span className='text-accent'>.</span></h1>
                </Link>
                <div className='lg:flex hidden gap-8 items-center'>
                    <NavList />
                    <Button>Hire me</Button>
                </div>
                <div className='lg:hidden block'>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
