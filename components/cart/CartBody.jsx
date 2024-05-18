import Link from 'next/link';

const CartBody = ({image}) => {
  return (
    <Link href="/detail">
      <img className=' text-center shadow-xl hover:text-gray-500' src="../../../imgs/icons/car-gray-2.svg" alt="" />
    </Link>
  )
}
export default CartBody;