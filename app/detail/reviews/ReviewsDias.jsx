import ReviewsButton from "./ReviewsButton"

export default function ReviewsDias() {
    return (
      <div className="bg-white rounded">
          <div className="px-6">
              <h2 className="flex gap-4 ">
                  <img src="../../../imgs/icons/Profil-2.svg" alt="" />
                  <p>
                      <h2 className="font-bold text-2xl py-8">Skylar Dias</h2>
                      <span className="">CEO at Amazon</span>
                  </p>
              </h2>
              <p className="px-24 py-3">
                We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and <br />
                comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
              </p>
          </div>
          <ReviewsButton />
      </div>
    )
  }