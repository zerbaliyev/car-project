import React from 'react'

export default function FilterSectionTime() {
  return (
    <>
        <select className='cursor-pointer pl-9 hover:text-neutral-400'>
            <option value="#">Select your time</option>
            <option value="#">08:00</option>
            <option value="#">14:00</option>
            <option value="#">20:00</option>
        </select>
    </>
  )
}
