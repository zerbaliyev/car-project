import React from 'react'

export default function FilterSection() {
  return (
    <>
        <select className='cursor-pointer pl-4'>
            <option value="#">Select your city</option>
            <option value="Az">Baku</option>
            <option value="Rus">Moskva</option>
            <option value="Turk">Ankara</option>
        </select>
    </>
  )
}
