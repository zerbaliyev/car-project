import Link from 'next/link'
import Cart from '../cart/Cart';

const cars = [
    {
        name:"Koenigsegg",
        category: "Sport",
        price: "$99.00",
        
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        price: "$80.00",
    },
    {
        name:"Rolls - Royce",
        category: "Sedan",
        price: "$96.00",
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        price: "$80.00",
    } ,
];

export default function CarSection() {
  return (
    <section className='w-full flex flex-col gap-5 pb-6 px-16 pt-4'>
        <div className='flex items-center justify-between'>
            <h2>Popular Car</h2>
            <Link className='text-blue-700 hover:text-blue-500 text-1xl font-bold' href="">Wiew All</Link>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {cars.map((car) => (
                    <Cart
                    title={car.name}
                    category={car.category}
                    price={car.price}
                    image={car.image}
                    />
                ))}
            </div>
    </section>
  )
}

