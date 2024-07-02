"use client";
import { createContext, ReactNode, useCallback, useState } from 'react'

export interface TMobileSidebarContext {
    open: boolean,
    toggleMobileSidebar: () => void
}

export const MobileSidebarContext = createContext<TMobileSidebarContext | undefined>(undefined)

const MobileSidebarProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false)

    const toggleMobileSidebar = useCallback(() => {
        setOpen(current => !current)
    }, [])

    return (
        <MobileSidebarContext.Provider value={{ open, toggleMobileSidebar }}>
            {children}
        </MobileSidebarContext.Provider>
    )
}

export default MobileSidebarProvider