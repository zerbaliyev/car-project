import Link from 'next/link'
import Cart from '../cart/Cart';

const cars = [
    {
        name:"Koenigsegg",
        category: "Sport",
        image: "../../imgs/cars-img/car-white-2.svg",
        price: "$99.00",
        id: 1,
        carInfo: 
            {
                id: 1, 
                gas: 90,
                type: "manual",
                people: 2
            },
            
        
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image: "../../imgs/cars-img/car-gray-2.svg",
        price: "$80.00",
        id: 2,
        carInfo: 
            {
                id: 2, 
                gas: 80,
                type: "manual",
                people: 2
            },
    },
    {
        name:"Rolls - Royce",
        category: "Sedan",
        image: "../../imgs/cars-img/car-blue-1.svg",
        price: "$96.00",
        id: 3,
        carInfo: 
            {
                id: 3, 
                gas: 70,
                type: "manual",
                people: 4
            },
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image: "../../imgs/cars-img/car-gray-2.svg",
        price: "$80.00",
        id: 4,
        carInfo: 
            {
                id: 4, 
                gas: 80,
                type: "manual",
                people: 2
            },
    } ,
];

export default function CarSection() {
  return (
    <section className='w-full flex flex-col gap-5 pb-6 pt-4'>
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
                    key={car.id}
                    carInfo={car.carInfo}
                    />
                ))}
            </div>
    </section>
  )
}

