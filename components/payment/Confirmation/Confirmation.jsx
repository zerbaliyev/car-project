import React from 'react'
import ConfirmationHeader from './ConfirmationHeader'
import ConfirmationBody from './ConfirmationBody'
import ConfirmationFooter from './ConfirmationFooter'

const Confirmation = () => {
  return (
    <section className='bg-white rounded lg:w-3/5 px-6 py-6 pt-6'>
        <ConfirmationHeader />
        <ConfirmationBody />
        <ConfirmationFooter />
    </section>
  )
}

export default Confirmation
