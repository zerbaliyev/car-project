import FilterSection from "@/components/filter/FilterSection"
import Main from "@/components/main/Main"
import PopularCar from "@/components/sections/PopularCar"
import RecomndationCar from "@/components/sections/RecomendationCar"

export default function page() {
  return (
    <main className="lg:px-16 px-4">
      <Main />
      <FilterSection />
      <PopularCar />
      <RecomndationCar />
    </main>
  )
} 
