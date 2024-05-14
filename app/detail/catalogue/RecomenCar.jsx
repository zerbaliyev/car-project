import Cart from '@/components/cart/Cart';
import Link from 'next/link'
import React from 'react'

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
];
export default function RecomndationCar() {
  return (
    
       
    <section className='w-full flex flex-col gap-5 pb-24 px-16 pt-4'>
        <div className='flex items-center justify-between'>
            <h2>Recomendation Car</h2>
            <Link className='text-blue-700 hover:text-blue-500 text-1xl font-bold' href="/car">Wiew All</Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {cars.map((car) => (
                <Cart
                title={car.name}
                category={car.category}
                price={car.price}
                image={car.image}
                key={car.name}
                />
            ))}
        </div>
    </section>
  )
}
