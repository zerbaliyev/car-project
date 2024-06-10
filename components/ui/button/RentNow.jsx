import Link from 'next/link'
import { Button } from '../button'

export default function RentNow() {
  return (
    <Link href="">
      <Button  className='bg-blue-700 text-white rounded py-1 px-1 hover:bg-blue-500'>Rent Now</Button>
    </Link>
  )
}
