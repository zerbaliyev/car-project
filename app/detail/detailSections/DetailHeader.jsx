import Stars from '@/components/Star'
import LinearHeart from '@/components/liner/LinearHeart'

export default function DetailHeader() {
  return (
    <div className=''>
      <span className=' flex items-center justify-between'>
        <h2 className="text-3xl font-bold px-6 py-6">Nissan GT-R</h2>
        <LinearHeart />
      </span>
      <span className='flex gap-4 px-6'>
        <Stars selectedStars={4} maxStars={5} />
        <p className='text-xl text-gray-500'>440+ Reviewer</p>
      </span>
    </div>
  )
}
