import React from 'react'

const GridTechStack = () => {
    return (
        <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
            <div className="flex flex-col gap-3 lg:gap-6">
                {
                    ['React.JS', 'Next.JS', 'TypeScript'].map(item => (
                        <span key={item} className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:text-base lg:opacity-100">
                            {item}
                        </span>
                    ))
                }
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center lg:py-5" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-6">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center lg:py-5" />
                {
                    ['Redux', 'TailwindCSS', 'Express'].map(item => (
                        <span key={item} className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:text-base lg:opacity-100">
                            {item}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default GridTechStack