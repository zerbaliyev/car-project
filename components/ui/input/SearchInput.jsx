import React from 'react'
import Filter from '../Filter'

export default function SearchInput() {
  return (
    <label className='flex gap-5 border rounded-full border-[#6591c766] py-3 px-6 mr-auto ml-20'>
        <button>
            <img src="../../../imgs/icons/search.svg" alt="" />
        </button>
        <input 
            type="text"
            placeholder='Search something here'
            className='focus:outline-none'
        />
        <Filter />
    </label>
  )
}
