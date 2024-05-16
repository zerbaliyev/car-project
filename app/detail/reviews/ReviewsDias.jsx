import Star from "@/components/icon/Star"
import ReviewsButton from "./ReviewsButton"

export default function ReviewsDias() {
    return (
      <div className="bg-white rounded">
        <div className="px-6">
            <div className="flex gap-4 ">
              <img src="../../../imgs/icons/Profil-2.svg" alt="" />
                <span className="flex items-end">
                  <span>
                    <h2 className="font-bold text-2xl pl-2 py-8">Alex Stanton</h2>
                      <span className="pl-2">CEO at Bukalapak</span>
                  </span>
                  <span className="">
                    <span className="pl-6">21 July 2022</span>
                      <Star />
                      </span>
                </span>
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