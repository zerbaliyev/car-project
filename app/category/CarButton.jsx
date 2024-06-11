import Cart from "@/components/cart/Cart";
const cars = [
    {
        name:"Koenigsegg",
        category: "Sport",
        image:"/imgs/cars-img/car-white-2.svg",
        price: "$99.00",
        id: 1,
        
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"/imgs/cars-img/car-gray-2.svg",
        price: "$80.00",
        id: 1,
    },
    {
        name:"Rolls - Royce",
        category: "Sedan",
        image:"/imgs/cars-img/car-blue-1.svg",
        price: "$96.00",
        id: 1,
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"/imgs/cars-img/car-jip-gray.png",
        price: "$80.00",
        id: 1,
    } , 
    {
        name:"Koenigsegg",
        category: "Sport",
        image:"../../imgs/cars-img/car-brown.png",
        price: "$99.00",
        id: 1,
        
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"/imgs/cars-img/car-jip-blue-2.png",
        price: "$80.00",
        id: 1,
    },
    {
        name:"Rolls - Royce",
        category: "Sedan",
        image:"/imgs/cars-img/car-jip-blue.png",
        price: "$96.00",
        id: 1,
    } ,
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"/imgs/cars-img/car-jip-white.png",
        price: "$80.00",
        id: 1,
    } , 
    {
        name:"Nissan GT - R",
        category: "Sport",
        image:"/imgs/cars-img/car-jip-blue.png",
        price: "$80.00",
        id: 1,
    } ,
    
    
];
export default function RecoCar() {
    if(cars.length > 0) {
        return (

            <section className='w-full flex flex-col gap-5 pt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {cars.map((car) => (
                        <Cart
                        title={car.name}
                        category={car.category}
                        price={car.price}
                        image={car.image}
                        key={car.id}
                        />
                    ))}
                </div>
                <div className='text-center'>
                    <p className='text-end'>{cars.length} {cars.length > 1 ? "Cars" : "Car"}</p>
                    {cars.length > 8 && <button  className='bg-blue-700 text-white px-4 py-3 rounded hover:bg-blue-500'>Show more car</button>}
                </div>
            </section>
        )
    }
}
