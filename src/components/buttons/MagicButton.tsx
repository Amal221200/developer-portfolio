import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode } from "react"


const MagicButton = ({ children, className, ...props }: ComponentProps<'button'>) => {
    return (
        <button {...props} className={cn("relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10", className)}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {children}
            </span>
        </button>
    )
}

export default MagicButton