import Image from 'next/image';
import LinearHeart from '../liner/LinearHeart';

const  CartHeader = ({title, category}) => {
  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='text-1xl font-bold'>{title}</h2>
        <p className='text-secondary-300 text-sm'>{category}</p>
      </div>
      <div>
        <LinearHeart />
      </div>
    </div>
  )
}
export default CartHeader;