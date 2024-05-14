import React from 'react'
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
export default function RecomndationCar() {
  return (
    
       
    <section className='w-full flex flex-col gap-5 pb-24 px-16 pt-4'>
        <h2 className='flex items-center justify-between'>Recomendation Car</h2>
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
        <div className='text-center py-5'>
        <p className='text-end'>120 Car</p>
        <button className='bg-blue-700 text-white px-4 py-3 rounded hover:bg-blue-500'>Show more car</button>
        </div>
    </section>
  )
}
