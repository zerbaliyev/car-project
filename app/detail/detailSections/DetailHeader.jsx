import Star from '@/components/icon/Star'
import LinearHeart from '@/components/liner/LinearHeart'
import React from 'react'

export default function DetailHeader() {
  return (
    <div className=''>
      <span className=' flex items-center justify-between'>
        <h2 className="text-3xl font-bold px-6 py-6">Nissan GT-R</h2>
        <LinearHeart />
      </span>
      <span className='flex'>
        <Star />
        <p className='text-xl text-gray-500'>440+ Reviewer</p>
      </span>
    </div>
  )
}
