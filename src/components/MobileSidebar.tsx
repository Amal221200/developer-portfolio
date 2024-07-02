"use client"
import React, { use } from 'react'
import { MobileSidebarContext, TMobileSidebarContext } from './providers/MobileSidebarProvider'
import { cn } from '@/lib/utils'
import { navItems } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileSidebar = () => {
    const { open, toggleMobileSidebar } = use(MobileSidebarContext) as TMobileSidebarContext
    const pathname = usePathname()

    return (
        <aside className={cn('fixed flex justify-start items-center transition-all duration-500 bottom-0 top-0 z-[60] h-full w-full bg-black-200/70 backdrop-blur-sm pl-10', open ? 'left-0' : '-left-full')}>
            <nav className='flex flex-col gap-y-5'>
                {
                    navItems.map((link) => (
                        <Link key={link.link} onClick={toggleMobileSidebar} href={link.link} className={cn('group relative w-max text-lg transition-all hover:font-semibold', pathname === link.link ? open ? 'font-semibold delay-700' : 'font-normal' : 'font-normal')}>
                            {link.name}
                            <div className={cn('h-[2px] rounded bg-white-100 transition-all group-hover:w-full', pathname === link.link ? open ? 'w-full delay-700' : 'w-0' : 'w-0')} />
                        </Link>
                    ))
                }
            </nav>
        </aside>
    )
}

export default MobileSidebar