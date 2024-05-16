import FilterSection from "@/components/filter/FilterSection"
import Main from "@/components/main/Main"
import CarSection from "@/components/sections/CarSection"
import RecomndationCar from "@/components/sections/RecomendationCar"

export default function page() {
  return (
    <main>
      <Main />
      <FilterSection />
      <CarSection />
      <RecomndationCar />
    </main>
  )
} 
