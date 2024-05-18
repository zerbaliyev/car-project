import Stars from "@/components/Star";

export default function ReviewsAlex() {
    return (
      <div className="bg-white rounded">
        <div className="flex gap-4 px-6 py-6">
            <h2 className="font-bold text-2xl">Reviews</h2>
            <button className='bg-blue-700 text-white hover:bg-blue-500 px-4 rounded'>13</button>
        </div>
        <div className="px-6">
            <div className="flex w-full justify-between">
            <div className="flex gap-4">
                <img src="../../../imgs/icons/Profil-1.svg" alt="" />
                <div>
                    <h2 className="font-bold text-2xl pl-2 py-6">Alex Stanton</h2>
                    <span className="pl-2">CEO at Bukalapak</span>
                </div>
            </div>
            <div className=" pt-10">
                <span className="">21 July 2022</span>
                <Stars selectedStars={4} maxStars={5} />
            </div>
            </div>
            <p className="pl-20 py-4">
            We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable <br />
            facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
        </div>
        </div>
    )
  }
   