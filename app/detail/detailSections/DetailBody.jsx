export default function DetailBody() {
  return (
    <>
        <div>
            <p className=" py-6 font-normal px-6 text-2xl">
                NISMO has become the embodiment of Nissan's <br />
                outstanding performance, inspired by the most 
                unforgiving proving ground, the "race track". 
            </p>
        </div>
        <div className='flex gap-16 px-6 justify-between'>
            <h2 className=''>
                <p className='flex gap-10'>
                    <span className='text-3xl text-gray-400'>TypeCar</span>
                    <span className='text-3xl text-slate-600 font-medium'>Sport</span>
                </p>
                <p className='flex gap-10'>
                    <span className='text-3xl text-gray-400'>Steering</span>
                    <span className='text-3xl text-slate-600 font-medium'>Manual</span>
                </p>
            </h2>

            <h2 className=''>
                <p className='flex gap-10'>
                    <span className='text-3xl text-gray-400'>CapaCity</span>
                    <span className='text-3xl text-slate-600 font-medium'>2 Preson</span>
                </p>
                <p className='flex gap-10'>
                    <span className='text-3xl text-gray-400'>Gasoline</span>
                    <span className='text-3xl text-slate-600 font-medium pl-20'>70L</span>
                </p>
            </h2>
        </div>
    </>
  )
}