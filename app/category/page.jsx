import FilterSection from "@/components/filter/FilterSection";
import SecondLayout from "./Layout";
import CarButton from "./CarButton"
const CategoryPage = () => {
  return (
    <SecondLayout>
        <FilterSection />
        <CarButton />
    </SecondLayout>
  )
}
export default CategoryPage;