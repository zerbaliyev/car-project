import FilterSection from "./FilterSectionCity";
import FilterSectionDate from "./FilterSectionDate";
import FilterSectionTime from "./FilterSectionTime";

export default function () {
  return (
    <section className=" flex gap-5 px-16">
        <div className="bg-white w-2/4 h-36 rounded-2xl">
            <h2 className="flex px-10 pt-4 gap-2">
              <img className="" src="../../imgs/icons/ellipse-1.svg" alt="" />
              Pick - Up
              </h2>
          <div className="flex gap-14">
            <div>
              <h2 className="flex font-bold px-10 pt-3">Locations</h2>
              <FilterSection />
            </div>
            <div>
              <h2 className="flex font-bold px-10 pt-3">Date</h2>
              <FilterSectionDate />
            </div>
            <div>
              <h2 className="flex font-bold px-10 pt-3">Time</h2>
              <FilterSectionTime />
            </div>
          </div>
        </div>

        <button className="bg-primary-500 rounded h-10 w-12 mt-10 ">
          <img className="px-3" src="../../imgs/icons/swap.svg" alt="" />
        </button>

        <div className="bg-white w-2/4 h-36 rounded-2xl ">
            <h2 className="flex px-10 pt-4 gap-2">
              <img className="" src="../../imgs/icons/ellipse-1.svg" alt="" />
              Pick - Up
              </h2>
          <div className="flex gap-14">
            <div>
              <h2 className="flex font-bold px-10 pt-3">Locations</h2>
              <FilterSection />
            </div>
            <div>
              <h2 className="flex font-bold px-10 pt-3">Date</h2>
              <FilterSectionDate />
            </div>
            <div>
              <h2 className="flex font-bold px-10 pt-3">Time</h2>
              <FilterSectionTime />
            </div>
          </div>
        </div>
    </section>
  )
}
