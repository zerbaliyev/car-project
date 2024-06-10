import HeaderActions from '@/components/ui/input/HeaderActions'
import SearchInput from '@/components/ui/input/SearchInput'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
      <header className='flex flex-wrap items-center justify-between px-16 py-10 border border-[#c3d4e966] bg-white'>
        <Link href="/" className='text-blue-800 font-size text-3xl font-bold grid-cols-1 md: hover:text-blue-500'>MORENT</Link>
        <SearchInput />
        <HeaderActions />
      </header> 
    </>
  )
}