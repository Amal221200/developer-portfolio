import { approaches } from "@/data"
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect"
import { AceternityIcon, Card } from "../ui/Card"

const MyApproach = () => {
    return (
        <section className='py-10 sm:pb-10 sm:pt-28'>
            <h2 className="heading">My <span className="text-purple">Approach</span></h2>
            <div className="my-20 flex flex-col gap-8 lg:flex-row">
                {
                    approaches.map(approach => (
                        <Card key={approach.title} title={approach.title} icon={<AceternityIcon order={approach.order} />}
                            des={approach.description}
                        >
                            <CanvasRevealEffect
                                animationSpeed={approach.animationSpeed}
                                containerClassName={approach.containerClass}
                                colors={approach.colors}
                                dotSize={approach.dotSize}
                            />
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default MyApproach