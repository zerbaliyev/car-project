import HeaderActions from '@/components/ui/input/HeaderActions'
import SearchInput from '@/components/ui/input/SearchInput'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between px-16 py-10 border border-[#c3d4e966] bg-white'>
        <Link href="/" className='text-blue-800 font-size text-3xl font-bold'>MORENT</Link>
        <SearchInput />
        <HeaderActions />
      </header> 
    </>
  )
}