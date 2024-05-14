import Cart from "@/components/cart/Cart";
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
    } ,   {
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
    } ,   {
        name:"Nissan GT - R",
        category: "Sport",
        image:"cc",
        price: "$80.00",
    } ,
    
    
];
export default function RecoCar() {
  return (

    <section className='w-full flex flex-col gap-5 px-16 pt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {cars.map((car) => (
                <Cart
                title={car.name}
                category={car.category}
                price={car.price}
                image={car.image}
                />
            ))}
        </div>
    <div className='text-center'>
        <p className='text-end'>120 Car</p>
        <button className='bg-blue-700 hover:bg-blue-500 text-white px-4 py-3 rounded'>Show more car</button>
    </div>
</section>
)
}


