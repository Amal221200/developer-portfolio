"use client"
import React, { use } from 'react'
import { MobileSidebarContext, TMobileSidebarContext } from '../providers/MobileSidebarProvider'
import { Menu, X } from 'lucide-react'

const MobileSidebarButton = () => {
    const { open, toggleMobileSidebar } = use(MobileSidebarContext) as TMobileSidebarContext
    return (
        <button onClick={toggleMobileSidebar} className="fixed bottom-5 left-5 z-[100] block rounded-md border border-white-100/[0.2] bg-black-100 p-2 text-sm text-white-200 transition duration-200 sm:hidden">
            {
                open ? <X /> : <Menu />
            }
        </button>
    )
}

export default MobileSidebarButton