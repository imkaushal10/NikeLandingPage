import React from 'react'
import {star} from '../assets/icons'

const ReviewCard = ({imgURL, customerName, 
    rating, feedback}) => {
  return (
    <section className=''>
        <div className='flex justify-center
        items-center flex-col'>
         <img src={imgURL} 
            alt="CRev"
            className='rounded-full object-cover
            w-[120px] h-[120px]'
             />
            <p className='mt-6 max-w-sm text-center
            info-text '>{feedback}</p>
        </div>
        
        <div className='mt-3 flex justify-center gap-2.5'> 
            <img src={star} 
                alt="star"
                height={24}
                width={24} 
                className='object-contain m-0'/>
                <p className='text-xl font-montserrat
                text-slate-gray'>(4.5)</p>
        </div>

        <h3 className='mt-1 font-bold text-3xl 
        font-palanquin text-center'>
            {customerName}</h3>
        
    </section>
  )
}

export default ReviewCard