import Image from "next/image"
import { Input } from "../ui/input"
import OptionSelect from "./OptionSelect"


const RentalInfo = () => {
  return (
    <section className='bg-white rounded w-3/5 px-6 py-6 ml-8 mt-8 pt-6'>
      <div className='flex justify-between'>
        <div>
          <h2 className='font-bold text-xl'>Rental Info</h2>
          <span className=' text-gray-500 text-base'>Please select your rental date</span>
        </div>
          <p>Step 1 of 4</p>
      </div>

      <h2 className="flex px-6 gap-2 py-6">
        <Image className="" 
        src="/imgs/icons/ellipse-1.svg" 
        width={15}
        height={1}
        alt="" />
        Pick - Up
      </h2>

      <OptionSelect />

      <div className=''>
        <div className=' w-2/4'>
          <h2 className='px-8 py-4 font-bold'>Time</h2>
          <Input className=" bg-neutral-200 p-6"  type="email" placeholder="Address" />
        </div>
      </div>
    </section>
  )
}

export default RentalInfo


 