import React from 'react'
import Cart from '../cart/Cart';

const cars = [
    {
        name:"Koenigsegg",
        category: "SUV",
        image:"../../imgs/cars-img/car-jip-gray.png",
        price: "$72.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    {
        name:"CR-V",
        category: "SUV",
        image:"../../imgs/cars-img/car-brown.png",
        price: "$80.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    } ,
    {
        name:"All New Terios",
        category: "SUV",
        image:"../../imgs/cars-img/car-jip-blue-2.png",
        price: "$74.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    {
        name:"CR-V",
        category: "SUV",
        image:"../../imgs/cars-img/car-black.png",
        price: "$80.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    {
        name:"MG ZX Exclusice",
        category: "Hatchback",
        image:"../../imgs/cars-img/car-jip-blue.png",
        price: "$76.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    {
        name:"New MG ZS",
        category: "SUV",
        image:"../../imgs/cars-img/car-jip-white.png",
        price: "$80.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    {
        name:"MG ZX Excite",
        category: "Hatchback",
        image:"../../imgs/cars-img/car-jip-blue.png",
        price: "$74.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    {
        name:"New MG ZS",
        category: "SUV",
        image:"../../imgs/cars-img/car-jip-white.png",
        price: "$80.00",
        id: 1,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
        
    },
    
];


export default function RecomndationCar() {
    if(cars.length > 0) {
        return (

       
            <section className='w-full flex flex-col gap-5 pb-8 pt-4'>
                <h2 className='flex items-center justify-between'>Recomendation Car</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {cars.map((car) => (
                            <Cart
                            title={car.name}
                            category={car.category}
                            price={car.price}
                            image={car.image}
                            key={car.id}
                            carInfo={car.carInfo}
                            />
                        ))}
                    </div>
                <div className='text-center py-5'>
                <p className='text-end'>{cars.length} {cars.length > 1 ? "Cars" : "Car"}</p>
                {cars.length >= 8 && <button  className='bg-blue-700 text-white px-4 py-3 rounded hover:bg-blue-500'>Show more car</button>}
                </div>
            </section>
        ) 
    } 
}
