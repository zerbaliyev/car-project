import Image from 'next/image'
import Stars from '../Star'

const RentalSummary = () => {
  return (
    <section className='bg-white rounded  lg:w-1/3 px-2 py-6 pt-6'>
      <div>
        <h2 className='font-bold text-lg'>Rental summary</h2>
        <p className=' text-slate-400'>Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>
      <div className='flex flex-wrap lg:flex-row gap-4'>
        <Image
        className='cursor-pointer hover:shadow-lg pt-6' 
          src="../../../imgs/icons/View-1.svg" 
          width={190}
          height={1}
          alt=""
        />
        <div className='w-16 pt-16'>
          <h2 className='font-bold text-2xl'>Nissan GT - R</h2>
          <div className='flex gap-2'>
            <Stars selectedStars={4} maxStars={5} />
            <p>440+ Reviewer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RentalSummary;
