import React from 'react'

export default function MainGrayCar() {
  return (
    <div className='bg-blue-800 w-3/5 rounded-2xl'>
          <h2 className='text-white text-3xl font-bold px-16 py-5'>
          Easy way to rent <br />
          a car at a low price
          </h2>
          <p className='text-white px-16 py-2'>
          Providing cheap car rental services <br />
          and safe and comfortable facilities.
          </p>
          <div className='pl-16 py-2'>
            <button className='bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-500'>Rental Car</button>
          </div>
          <button className='px-40'>
            <img  src="../../imgs/icons/gray-car-1.svg" alt="" />
          </button>
    </div>
  )
}
