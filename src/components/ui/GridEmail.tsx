"use client"
import { useCallback, useState } from 'react'
import MagicButton from './MagicButton'
import { Copy } from 'lucide-react'
import Lottie from 'react-lottie'
import animationData from "@/data/confetti.json"

const GridEmail = () => {
    const [copied, setCopied] = useState(false)

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText('amalmurikkoli@gmail.com')
        setCopied(true)

        // setTimeout(() => {
        //     setCopied(false)
        // }, 5000)
    }, [])
    return (
        <div className="relative mt-5">
            <div className="absolute -bottom-5 right-0">
                <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                        preserveAspectRatio:'xMidYMid slice'
                    }
                }} />
            </div>
                <MagicButton onClick={handleCopy} className='!bg-[#161a31]'>
                    <Copy className='mr-2' size={18} />
                    {
                        copied ? "Email Copied" :
                            "Copy my email"
                    }
                </MagicButton>
        </div>
    )
}

export default GridEmail