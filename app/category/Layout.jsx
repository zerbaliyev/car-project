import SideBar from "@/components/sidebar/SideBar"
import PriceSlider from "@/components/slider/PriceSlider"

const   SecondLayout = ( {children}) => {
  return (
    <div className="flex">
        <div className="w-1/4 bg-white p-8">
          <SideBar />
          <PriceSlider />
        </div>
        <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
export default SecondLayout