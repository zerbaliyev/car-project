import FilterSection from "@/components/filter/FilterSection"
import Main from "@/components/main/Main"
import PopularCar from "@/components/sections/PopularCar"
import RecomndationCar from "@/components/sections/RecomendationCar"

export default function page() {
  return (
    <main>
      <Main />
      <FilterSection />
      <PopularCar />
      <RecomndationCar />
    </main>
  )
} 
