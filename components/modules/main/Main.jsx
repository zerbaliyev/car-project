export default function () {
  return (
      <section className=" flex gap-5 px-16 py-5">
        <div className='bg-blue-400 w-3/5 rounded-2xl'>
          <h2 className='text-secondary-100 px-16 py-5'>
            The Best Platform <br />
            for Car Rental
          </h2>
          <p className='text-secondary-100 px-16 py-2'>
            Ease of doing a car rental safely and <br />
            reliably. Of course at a low price.
          </p>
          <div className='pl-16 py-2'>
            <button className='bg-blue-900 text-secondary-100 px-5 py-2 rounded'>Rental Car</button>
          </div>
          <button className='px-40'>
            <img  src="../../imgs/icons/white-car-1.svg" alt="" />
          </button>
        </div>

        <div className='bg-blue-800 w-3/5 rounded-2xl'>
          <h2 className='text-secondary-100 px-16 py-5'>
          Easy way to rent <br />
          a car at a low price
          </h2>
          <p className='text-secondary-100 px-16 py-2'>
          Providing cheap car rental services <br />
          and safe and comfortable facilities.
          </p>
          <div className='pl-16 py-2'>
            <button className='bg-blue-400 text-secondary-100 px-5 py-2 rounded'>Rental Car</button>
          </div>
          <button className='px-40'>
            <img  src="../../imgs/icons/gray-car-1.svg" alt="" />
          </button>
        </div>
      </section>
  )
}
