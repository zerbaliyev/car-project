import Image from 'next/image'
import React from 'react'

export default function () {
  return (
    <div className='flex gap-5 '>
          <Image className='cursor-pointer'  
          src="../../../imgs/icons/button.svg" 
          width={50}
          height={1}
          alt="" />
          <Image className='cursor-pointer'
          src="../../../imgs/icons/notification.svg" 
          width={50}
          height={1}
          alt="" />
          <Image className='cursor-pointer' 
          src="../../../imgs/icons/settings.svg" 
          width={50}
          height={1}
          alt="" />
          <Image className='cursor-pointer' 
          src="/imgs/icons/profil-1.svg" 
          width={50}
          height={1}
          alt="" />
    </div>
  )
}
