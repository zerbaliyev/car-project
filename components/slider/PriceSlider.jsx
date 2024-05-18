import { Slider } from "@/components/ui/slider"

export default function PriceSlider() {
  return (
    <div className="py-14">
        <span className=" text-slate-500">P R I C E</span>
        <Slider className="pt-6 cursor-pointer" defaultValue={[20]} max={100} step={1} />
        <p className="pt-4 font-medium text-slate-500 h-2">Max. $100.00</p>
    </div>
  )
}
