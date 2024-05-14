import React from 'react'

export default function SearchInput() {
  return (
    <label className=' flex gap-5 border border-[#8b8a8a] py-3 px-5 mr-auto ml-16'>
        <button>
            <img src="../imgs/icons/search.svg" alt="" />
        </button>
        <input type="text" placeholder='Search something here' className='focus:outline-none' />   
        <button>filter</button> 
    </label>
  )
}
