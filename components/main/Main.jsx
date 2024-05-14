import MainGrayCar from "./MainGrayCar";
import MainWhiteCar from "./MainWhiteCar";

export default function () {
  return (
      <section className=" flex gap-5 px-16 py-5 grid-cols-1 md:">
        <MainWhiteCar />
        <MainGrayCar />
      </section>
  )
}
