import React from 'react'
import ConfirmationHeader from './ConfirmationHeader'
import ConfirmationBody from './ConfirmationBody'

const Confirmation = () => {
  return (
    <section className='bg-white rounded w-3/5 px-6 py-6 pt-6'>
        <ConfirmationHeader />
        <ConfirmationBody />
    </section>
  )
}

export default Confirmation
