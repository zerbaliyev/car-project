import Image from 'next/image'
import React from 'react'

export default function ViewImgs() {
  return (
    <div className='flex gap-6 py-6'>
      <Image
       className='cursor-pointer hover:shadow-lg border-double border-4 border-indigo-800' 
        src="../../../imgs/icons/View-1.svg" 
        width={190}
        height={1}
        alt="" />
      <Image className='cursor-pointer hover:shadow-lg ' 
        src="../../../imgs/icons/View-2.svg" 
        width={200}
        height={1}
        alt="" />
      <Image className='cursor-pointer hover:shadow-lg ' 
        src="../../../imgs/icons/View-3.svg"
        width={200}
        height={1} 
        alt="" />        
    </div>
  )
}
