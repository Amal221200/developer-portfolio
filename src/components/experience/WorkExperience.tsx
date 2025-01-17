import { workExperience } from "@/data"
import MovingBorderButton from "../buttons/MovingBorderButton"


const WorkExperience = () => {
    return (
        <section className="py-10 sm:pb-10 sm:pt-20" id="experience">
            <h1 className="heading">My {" "}
                <span className="text-purple">work experience</span>
            </h1>
            <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
                {
                    workExperience.map((experience) => (
                        <MovingBorderButton key={experience.id} borderRadius="1.75rem"
                            className="border-neutral-200 text-white dark:border-slate-800" duration={Math.floor(Math.random() * 1000) + 1000}>
                            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
                                <img src={experience.thumbnail} alt={experience.title} className="w-16 md:w-20 lg:w-32" />

                                <div className="lg:ms-5">
                                    <h1 className="text-start text-xl font-bold md:text-2xl">{experience.title}</h1>
                                    <p className="mt-3 text-start font-semibold text-white-100">{experience.desc}</p>
                                </div>
                            </div>
                        </MovingBorderButton>
                    ))
                }
            </div>
        </section>
    )
}

export default WorkExperience