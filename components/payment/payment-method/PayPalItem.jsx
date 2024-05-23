import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

const PayPalItem = () => {
  return (
    <>
        <Accordion className="mt-8 bg-gray-200 rounded" type="single" collapsible>
            <AccordionItem value="item-1">
              <div className="flex justify-between">
                <AccordionTrigger className="px-6">PayPal</AccordionTrigger>
                <Image className="pr-6"
                src="/imgs/icons/PayPal (1).svg"
                width={100}
                height={1}
                alt="visa"
                />
              </div>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
  )
}

export default PayPalItem;
