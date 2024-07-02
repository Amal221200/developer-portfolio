import React from 'react'
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <section className="py-20" id="projects">
            <h1 className="heading">Kind words from {" "}
                <span className="text-purple">satisfied clients</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />

                <div className='flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16'>
                    {
                        companies.map((company)=> (
                            <div key={company.id} className='flex max-w-32 gap-2 md:max-w-60'>
                                <img src={company.img} alt={company.name} className='w-5 md:w-10' />
                                <img src={company.nameImg} alt={company.name} className='w-20 md:w-24' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients