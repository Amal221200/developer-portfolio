import { Navigation } from "lucide-react"
import MagicButton from "../buttons/MagicButton"
import { socialMedia } from "@/data"


const ContactDetails = () => {
    return (
        <section className="grid content-center md:h-screen" id="contact">
            <div className="absolute -bottom-72 left-0 w-full">
                <img src="/footer-grid.svg" alt="grid" className="h-full w-full opacity-50" />
            </div>
            <div className="flex flex-col items-center">
                <h2 className="heading lg:max-w-[45vw]">Ready to take <span className="text-purple">your</span> digital experience to next level?</h2>
                <p className="my-5 text-center text-white-200 md:mt-10">
                    Reach out to me and {"let's"} discuss how can I help you achieve your goals.
                </p>
                <a href="mailto:amalmurikkoli2000@gmail.com">
                    <MagicButton>
                        {"Let's"} get in Touch <Navigation size={16} className="ml-2" />
                    </MagicButton>
                </a>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
                <p className="text-sm font-light md:text-base md:font-normal">Copyright &copy; 2024 Amal Murikkoli</p>
                <div className="flex items-center gap-6 md:gap-3">
                    {
                        socialMedia.map((social)=> (
                            <div key={social.id} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-[1.8] backdrop-blur-lg backdrop-filter">
                                <img src={social.img} alt={social.img} width={20} height={20} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ContactDetails