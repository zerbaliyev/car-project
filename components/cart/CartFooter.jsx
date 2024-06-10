import React from 'react'
import RentNow from '../ui/button/RentNow';

const CartFooter = ({price}) => {
  return (
    <div className='flex items-center justify-between'>
      <span className='text-2xl font-bold'>{price}/day</span>
      <RentNow />
    </div>
  )
}
export default CartFooter;