import React from 'react'
const ProductCard = ({elem}) => {

  return (
    <div className='bg-neutral-200 h-70 w-50 flex flex-col items-center p-2'>
        <img className='w-[95%] h-[60%] bg-white' src={elem.image} alt="" />
        <h1 className='text-neutral-800 font-semibold text-xs text-center mt-3'>{elem.title}</h1>
        <div className=' flex mt-8 gap-4 text-xs text-white font-bold *:py-1 *:px-2'>
            <button className='bg-blue-400 rounded-md'>Buy Now</button>
            <button className='bg-green-400 rounded-md'>Add +</button>
        </div>
    </div>
  )
}

export default ProductCard
