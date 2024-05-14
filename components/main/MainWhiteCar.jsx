import React from 'react'

export default function MainWhiteCar() {
  return (
    <div className='bg-blue-400 w-3/5 rounded-2xl'>
          <h2 className='text-white text-3xl font-bold px-16 py-5'>
            The Best Platform <br />
            for Car Rental
          </h2>
          <p className='text-white px-16 py-2'>
            Ease of doing a car rental safely and <br />
            reliably. Of course at a low price.
          </p>
          <div className='pl-16 py-2'>
            <button className='bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-500'>Rental Car</button>
          </div>
          <button className='px-40'>
            <img  src="../../imgs/icons/white-car-1.svg" alt="" />
          </button>
    </div>
  )
}
