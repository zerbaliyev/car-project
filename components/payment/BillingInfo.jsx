import { Input } from '../ui/input'

const BillingInfo = () => {
  return (
    <section className='bg-white rounded w-3/5 px-6 py-6 ml-8 mt-8 pt-6'>
        <div className='flex justify-between'>
            <div>
                <h2 className='font-bold text-xl'>Billing Info</h2>
                <span className=' text-gray-500 text-base'>Please enter your billing info</span>
            </div>
            <p>Step 1 of 4</p>
        </div>

      <div className='flex gap-8'>
        <div className=' w-1/2'>
          <h2 className='px-8 py-4 font-bold'>Name</h2>
          <Input className=" bg-neutral-200 p-6"  type="email" placeholder="Your name" />
        </div>
        <div className=' w-1/2'>
          <h2 className='px-8 py-4 font-bold'>Phone Number</h2>
          <Input className=" bg-neutral-200 p-6"  type="email" placeholder="Phone number" />
        </div>
      </div>  

      <div className='flex gap-8'>
        <div className=' w-1/2'>
          <h2 className='px-8 py-4 font-bold'>Address</h2>
          <Input className=" bg-neutral-200 p-6"  type="email" placeholder="Address" />
        </div>
        <div className=' w-1/2'>
          <h2 className='px-8 py-4 font-bold'>Town / City</h2>
          <Input className=" bg-neutral-200 p-6"  type="email" placeholder="Town or city" />
        </div>
      </div>
    </section>
  )
}

export default BillingInfo
