import React from 'react'

export default function FilterSectionDate() {
  return (
    <>
        <select className='cursor-pointer pl-9 hover:text-neutral-400'>
            <option value="#">Select your date</option>
            <option value="#">2024</option>
            <option value="#">2023</option>
            <option value="#">2022</option>
        </select>
    </>
  )
}
