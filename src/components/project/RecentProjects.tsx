/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data"
import { Navigation } from "lucide-react"
import dynamic from "next/dynamic"
const PinContainer = dynamic(() => import('../ui/3dPin').then(m => m.PinContainer), { ssr: false })

const RecentProjects = () => {
    return (
        <section className="py-10 sm:pt-28" id="projects">
            <h1 className="heading">A small selection of {" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 p-4">
                {
                    projects.map((project) => (
                        <div key={project.id} className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]">
                            <PinContainer href={project.link} title={project.link} >
                                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img src={project.img} alt={project.title} className="absolute bottom-0 z-10" />
                                </div>
                                <h3 className="line-clamp-1 text-base font-bold md:text-2xl lg:text-2xl">{project.title}</h3>
                                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                                    {project.des}
                                </p>
                                <div className="mb-3 mt-7 flex items-center justify-between">
                                    <div className="flex items-center">
                                        {
                                            project.iconLists.map((icon, index) => (
                                                <div key={icon} className="grid h-8 w-8 place-content-center rounded-full border border-white/[0.1] bg-black lg:h-10 lg:w-10" style={{
                                                    transform: `translateX(-${5 * index * 2}px)`
                                                }}>
                                                    <img src={icon} alt={icon} className="p-2" />
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <p className="flex text-sm text-purple md:text-xs lg:text-xl">Check Live Site</p> 
                                        <Navigation size={19} color="#cbacf9" fill="#cbacf9" className="" />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default RecentProjects