import { CanvasRevealEffect } from "../ui/CanvasRevealEffect"
import { AceternityIcon, Card } from "../ui/Card"

const MyApproach = () => {
    return (
        <section className="">
            <h2 className="heading">My <span className="text-purple">Approach</span></h2>
            <div className="my-20 flex flex-col gap-8 lg:flex-row">
                <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase One" />}
                    des="We'll collaborate to map out your website's goals, target audience, 
and key functionalities. We'll discuss things like site structure, 
navigation, and content requirements."
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase Two" />}
                    des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                </Card>
                <Card
                    title="Development & Launch"
                    icon={<AceternityIcon order="Phase 3" />}
                    des="This is where the magic happens! Based on the approved design, 
                I'll translate everything into functional code, building your website
                from the ground up."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    )
}

export default MyApproach