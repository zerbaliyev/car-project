import Cart from '@/components/cart/Cart';
import Link from 'next/link'
import React from 'react'

const cars = [
    {
        name:"Koenigsegg",
        category: "Sport",
        image:"/imgs/cars-img/car-jip-gray.png",
        price: "$99.00",
        
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"/imgs/cars-img/car-brown.png",
        price: "$80.00",
    },
    {
        name:"Rolls - Royce",
        category: "Sedan",
        image:"/imgs/cars-img/car-jip-blue-2.png",
        price: "$96.00",
    } ,
];
export default function RecomndationCar() {
  return (
    
       
    <section className='flex flex-col gap-5 pb-8 pt-4'>
        <div className='flex items-center justify-between'>
            <h2>Recomendation Car</h2>
            <Link className='text-blue-700 hover:text-blue-500 text-1xl font-bold' href="/car">Wiew All</Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
