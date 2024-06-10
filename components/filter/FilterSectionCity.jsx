import React from 'react'

export default function FilterSection({title}) {
  return (
    <>
        <select className='cursor-pointer pl-9 hover:text-neutral-400'>
            <option value="#">Select your city</option>
            <option value="Az">Baku</option>
            <option value="Rus">Moskva</option>
            <option value="Turk">Ankara</option>
        </select>
    </>
  )
}
