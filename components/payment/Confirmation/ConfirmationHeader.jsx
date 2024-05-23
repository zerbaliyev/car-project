import React from 'react'

const ConfirmationHeader = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='font-bold text-lg'>Confirmation</h2>
        <p className=' text-gray-400'>We are getting to the end. Just few clicks and your rental is ready!</p>
      </div>
      <p className=' text-gray-400 pt-6'>Step 4 of 4</p>
    </div>
  )
}

export default ConfirmationHeader
