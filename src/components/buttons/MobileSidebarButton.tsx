"use client"
import React, { use } from 'react'
import { MobileSidebarContext, TMobileSidebarContext } from '../providers/MobileSidebarProvider'
import { Menu, X } from 'lucide-react'
import { HoverBorderGradient } from '../ui/HoverBorderGradient';

const MobileSidebarButton = () => {
    const { open, toggleMobileSidebar } = use(MobileSidebarContext) as TMobileSidebarContext
    return (
        <HoverBorderGradient
            containerClassName="fixed bottom-5 left-5 z-[100] rounded-md sm:hidden"
            as="button"
            className="flex items-center bg-white text-black dark:bg-black dark:text-white"
            onClick={toggleMobileSidebar}
        >
            {
                open ? <X /> : <Menu />
            }
        </HoverBorderGradient>
    )
}
const AceternityLogo = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black dark:text-white"
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default MobileSidebarButton