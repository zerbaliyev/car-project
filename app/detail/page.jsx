import MainGrayCar from "@/components/main/MainGrayCar";
import SecondLayout from "./Layout";
import DetailCar from "./DetailCar";
import ViewImgs from "./ViewImgs";
import Reviews from "./reviews/Reviews";
import CatalogueSections from "./catalogue/CatalogueSections";
const CategoryPage = () => {
  return (
    <SecondLayout>
        <div className="flex">
            <MainGrayCar />
            <DetailCar />
        </div>
        <ViewImgs />
        <Reviews /> 
        <CatalogueSections />     
    </SecondLayout>
  )
}
export default CategoryPage;