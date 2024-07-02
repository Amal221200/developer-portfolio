/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import GridEmail from "./GridEmail";
import GridTechStack from "./GridTechStack";

export default function BentoGrid({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    spareImg,
    titleClassName
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number,
    titleClassName?: string,
    img?: string,
    imgClassName?: string,
    spareImg?: string,

}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >

            <div className={cn("", id === 6 && "flex justify-center h-full")}>
                <div className="absolute h-full w-full">
                    {
                        img && (
                            <img src={img} alt={img} className={cn('object-cover object-center', imgClassName)} />
                        )
                    }
                </div>
                <div className={cn("absolute -bottom-5 right-0", id === 5 && 'w-full opacity-80')}>
                    {
                        spareImg && (
                            <img src={spareImg} alt={spareImg} className={"h-full w-full object-cover object-center"} />
                        )
                    }
                </div>
                {
                    id === 6 && (
                        <BackgroundGradientAnimation />
                    )
                }

                <div className={cn('group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10', titleClassName)}>
                    <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
                        {description}
                    </div>
                    <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                        {title}
                    </div>

                    {
                        id === 2 && (
                            <GridGlobe />
                        )
                    }
                    {
                        id === 3 && (
                            <GridTechStack />
                        )
                    }

                    {
                        id === 6 && (
                            <GridEmail />
                        )
                    }
                </div>
            </div>
        </div>
    );
};
