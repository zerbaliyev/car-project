import Link from 'next/link'
import Cart from '../cart/Cart';

const cars = [
    {
        name:"Koenigsegg",
        category: "Sport",
        image:"../../imgs/icons/car-white-2.svg",
        price: "$99.00",
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"bb",
        price: "$80.00",
    },
    {
        name:"Rolls - Royce",
        category: "Sedan",
        image:"cc",
        price: "$96.00",
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"cc",
        price: "$80.00",
    } ,
];

export default function CarSection() {
  return (
    <section className='w-full flex flex-col gap-5 pb-24 px-16 pt-4'>
        <div className='flex items-center justify-between'>
            <h2>Popular Car</h2>
            <Link className='text-blue-700 text-1xl font-bold' href="/car">view All</Link>
        </div>

        <div className='flex gap-3'>
            {cars.map((car) => (
                <div className='w-1/4'>
                    <Cart
                    title={car.name}
                    category={car.category}
                    price={car.price}
                    image={car.image}
                    />
                </div>
            ))}
        </div>
    </section>
  )
}
