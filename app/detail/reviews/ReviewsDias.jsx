import Stars from "@/components/Star"
import ReviewsButton from "./ReviewsButton"

export default function ReviewsDias() {
    return (
      <div className="bg-white rounded">
        <div className="px-6">
          <div className="flex w-full justify-between">
            <div className="flex gap-4">
              <img src="../../../imgs/icons/Profil-2.svg" alt="" />
              <div>
                <h2 className="font-bold text-2xl pl-2 py-6">Skylar Dias</h2>
                <span className="pl-2">CEO at Amazon</span>
              </div>
            </div>
            <div className=" pt-10">
              <span className="">21 July 2022</span>
              <Stars selectedStars={4} maxStars={5} />
            </div>
          </div>
            <p className="pl-20 py-4">
              We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and <br />
              comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
        </div>
        <ReviewsButton />
      </div>
    )
  }