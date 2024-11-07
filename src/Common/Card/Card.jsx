import React from 'react'
import { cardData } from '../../Utils/Constants/Card'

const Card = () => {
  return (
    <div className='px-8 pb-8 pt-16 flex'>
      {cardData.map((item, index) => (
        <div key={index} className='w-1/2 flex items-center gap-16'>
          <div className='flex flex-col gap-3 p-4 rounded-s-lg'>
            <span className='text-2xl'>
              GET <span className='text-2xl font-bold ms-2'>{item.title1}</span>
            </span>
            <p className='text-2xl'>{item.title2}</p>
            <p className='text-xl'>{item.subTitle}</p>
            <p className='text-base'>Go To Collection</p>
          </div>
          <div className='rounded-e-lg'>
            <img className='w-64 h-44' src={item.image} alt={item.title1} />
          </div>
        </div>  
      ))}
    </div>
  )
}

export default Card
