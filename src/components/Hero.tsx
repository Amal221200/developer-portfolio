import Spotlight from "./ui/Spotlight"
import { Navigation } from "lucide-react"
import TextGenerateEffect from "./ui/TextGenerateEffect"
import MagicButton from "./buttons/MagicButton"
import Link from "next/link"

const Hero = () => {
    return (
        <section className="flex min-h-screen sm:block sm:pt-36">
            <div>
                <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
                <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.05]">
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
            </div>
            <div className="relative z-10 my-20 flex justify-center">
                <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
                    <h1 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
                        Dynamic Web Magic with Next JS
                    </h1>
                    <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl" />
                    <p className="mb-4 text-center md:text-lg md:tracking-wider lg:text-2xl">
                        {"Hi, I'm Amal, a Next JS developer based in India"}
                    </p>

                    <Link href="/about">
                        <MagicButton>
                            Show My Work <Navigation className="ml-2" size={16} fill="#fff" />
                        </MagicButton>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero