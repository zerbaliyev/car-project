import MainGrayCar from "./MainGrayCar";
import MainWhiteCar from "./MainWhiteCar";

export default function () {
  return (
      <section className="grid gap-5 lg:py-5 grid-cols-1 md:grid-cols-2">
        <MainWhiteCar />
        <MainGrayCar />
      </section>
  )
}
