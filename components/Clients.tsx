import React from 'react'
import { InfiniteMovingCards } from './ui/InfinityMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div>
      <div className="py-20" id="depoimentos">
            <h1 className="heading">
            Depoimentos de alguns {' '}
                <span className="text-purple">colegas de trabalho.</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
              <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
              />
            </div>
        </div>
    </div>
  )
}

export default Clients
