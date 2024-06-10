import React from 'react'

export default function SearchInput() {
  return (
    <label className='flex gap-5 border rounded-full border-[#6591c766] py-3 px-6 mr-auto lg:ml-20 '>
        <button>
            <img src="../../../imgs/icons/search.svg" alt="" />
        </button>
        <input 
            type="text"
            placeholder='Search something here'
            className='focus:outline-none'
        />
        <button className='ml-20'>
          <img src="../../../imgs/icons/filter.svg" alt="" />
        </button>    
    </label>
  )
}
