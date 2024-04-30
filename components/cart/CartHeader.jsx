import React from 'react'

const  CartHeader = ({title, category}) => {
  return (
    <div>
      <h2 className='text-1xl font-bold'>{title}</h2>
      <p className='text-secondary-300 text-sm'>{category}</p>
    </div>
  )
}
export default CartHeader;