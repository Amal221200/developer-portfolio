/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data"
import { Navigation } from "lucide-react"
import { AnimatedTooltip } from "../ui/Tootltip"
import { CardBody, CardContainer, CardItem } from "../ui/3dCard"

const RecentProjects = () => {
    return (
        <section className="py-10 sm:pt-28" id="projects">
            <h1 className="heading">A small selection of {" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 p-4">
                {
                    projects.map((project) => (
                        <CardContainer key={project.id}>
                            <CardBody>
                                <div className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]">
                                    <div className="relative rounded-2xl border border-white/[0.1] bg-sky-500/[0.08] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
                                        <CardItem className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]" translateZ={100}>
                                                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                                                    <img src="/bg.png" alt="bg-img" />
                                                </div>
                                                <img src={project.img} alt={project.title} className="absolute bottom-0 z-10 w-[94%] translate-y-4 rotate-2 transform rounded-xl" />
                                        </CardItem>
                                        <h3 className="line-clamp-1 text-base font-bold md:text-2xl lg:text-2xl">{project.title}</h3>
                                        <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                                            {project.des}
                                        </p>
                                        <CardItem className="w-full" translateZ={50}>
                                            <div className="mb-3 mt-7 flex items-center justify-between">
                                                <div className="flex items-center">
                                                    {
                                                        project.stack.map((stack, index) => (
                                                            <AnimatedTooltip key={stack.name} id={index} name={stack.name}>
                                                                <div className="grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-white/[0.1] bg-black lg:h-10 lg:w-10">
                                                                    <img src={stack.img} alt={stack.name} className="p-2" />
                                                                </div>
                                                            </AnimatedTooltip>
                                                        ))
                                                    }
                                                </div>

                                                <a href={project.link} className="flex items-center gap-2">
                                                    <p className="flex text-sm text-purple md:text-xs lg:text-base">Check Live Site</p>
                                                    <Navigation size={17} color="#cbacf9" fill="#cbacf9" className="" />
                                                </a>
                                            </div>
                                        </CardItem>
                                    </div>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))
                }
            </div>
        </section>
    )
}

export default RecentProjects