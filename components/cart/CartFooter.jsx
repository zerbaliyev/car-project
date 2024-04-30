import React from 'react'

const CartFooter = ({price}) => {
  return (
    <div className='flex items-center justify-between'>
      <span className='text-1xl font-bold'>{price}/day</span>
      <button className='bg-blue-600 text-white rounded py-1 px-1'>Rent Now</button>
    </div>
  )
}
export default CartFooter;