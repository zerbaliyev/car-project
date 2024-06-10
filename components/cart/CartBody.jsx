import Image from 'next/image';
import Link from 'next/link';

const CartBody = ({image, carInfo}) => {
  return (
    <>
    <Link href="/detail">
      <img className=' w-11/12' src={image} alt="" />
    </Link>
    <div className='flex gap-4 w-2/4'>
      <div className='flex gap-2'>
        <Image 
          src="../imgs/icons/gas-station.svg"
          width={20}
          height={1}
          alt='gas'
          /> 
        {carInfo?.gas}
      </div>

      <div className='flex gap-2'>
        <Image 
          src="../imgs/icons/manual.svg"
          width={20}
          height={1}
          alt='manual'
        />
        {carInfo?.type}
      </div>

      <div className='flex gap-2'>
        <Image 
          src="../imgs/icons/profile-user.svg"
          width={20}
          height={1}
          alt='profile'
        />
        {carInfo?.people}
      </div>
    </div>
    </>
  )
}
export default CartBody;