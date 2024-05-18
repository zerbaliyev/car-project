import Image from 'next/image'

export default function LinearHeart() {
  return (
    <div className=' cursor-pointer pr-6'>
      <Image
       src="../../../imgs/icons/heart.svg"
       width={30}
       height={30}
       alt='heart'
      />
    </div>
  )
}
