export default function Reviews() {
  return (
    <div className="bg-white rounded">
        <p className="flex gap-4">
            <h2 className="font-bold text-2xl">Reviews</h2>
            <button className='bg-blue-700 text-white hover:bg-blue-500 px-4 rounded'>13</button>
        </p>
        <div className="px-6">
            <h2 className="flex gap-4 ">
                <img src="../../../imgs/icons/Profil-1.svg" alt="" />
                <p>
                    <h2 className="font-bold text-2xl py-8">Alex Stanton</h2>
                    <span className="">CEO at Bukalapak</span>
                </p>
            </h2>
            <p className="px-24 py-3">
                We are very happy with the service from the MORENT App. Morent has a low price and  also a large variety of cars with good and comfortable <br />
                facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
        </div>
    </div>
  )
}
 