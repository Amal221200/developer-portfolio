import React from 'react'
import BentoGrid, { BentoGridItem } from '../ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='py-10 sm:pb-10 sm:pt-28'>
    <BentoGrid>
      {
        gridItems.map((item) => (
          <BentoGridItem key={item.id} id={item.id} title={item.title} description={item.description}
          className={item.className} img={item.img} imgClassName={item.imgClassName} spareImg={item.spareImg}
          titleClassName={item.titleClassName} />
        ))
      }
    </BentoGrid>
  </section>
  )
}

export default Grid