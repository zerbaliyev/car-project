import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SideType() {
  return (
    <>  
    <h2 className="pb-7">TYPE</h2>
        <div className="space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Sport (10)</Label>
        </div> 
        <div className="space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">SUV (12)</Label>
        </div> 
        <div className="space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">MPV (16)</Label>
        </div>  
        <div className="space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Sedan (20)</Label>
        </div> 
        <div className="space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Coupe (14)</Label>
        </div> 
        <div className="space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Hatchback (14)</Label>
        </div>  
    </>
  )
}
