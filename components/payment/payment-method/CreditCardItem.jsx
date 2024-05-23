"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, useForm } from 'react-hook-form'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage, 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";


const FormSchema = z.object({
    number: z.string().min(2, {
      message: "Number must be at least 2 characters.",
    }),
    date: z.string().min(3, {
        message: "Date must be at least 3 characters.",
    }),
    holder: z.string().min(4, {
        message: "Holder must be at least 4 characters.",
    }),
    cvc: z.string().min(5, {
        message: "Cvc must be at least 5 characters.",
    }),
});


const CreditCardItem = () => {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            number: "",
            date: "",
            holder: "",
            cvc: "",
        },
      })
      
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
        <Accordion className="mt-8 bg-gray-200 rounded" type="single" collapsible>
            <AccordionItem  value="item-1">
                <div className="flex justify-between">
                    <AccordionTrigger className="px-6">Credit Card</AccordionTrigger>
                    <Image className="pr-6"
                    src="/imgs/icons/visa.svg"
                    width={100}
                    height={1}
                    alt="visa"
                    />
                </div>
            <AccordionContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-bold text-lg px-6">Card Number</FormLabel>
                    <FormControl>
                        <Input className="bg-white p-6 ml-6 w-10/12" placeholder="Card number" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-bold text-lg px-6 ">Expration Date</FormLabel>
                    <FormControl>
                        <Input className="bg-white p-6 w-10/12" placeholder="DD / MM / YY" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}

                />
                <FormField
                    control={form.control}
                    name="holder"
                    render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-bold text-lg px-6">Card Holder</FormLabel>
                    <FormControl>
                        <Input className="bg-white p-6 ml-6 w-10/12" placeholder="Card holder" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cvc"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-bold text-lg px-6 ">CVC</FormLabel>
                    <FormControl>
                        <Input className="bg-white p-6 w-10/12" placeholder="CVC" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
                />
                </form>
            </Form>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
  )
}

export default CreditCardItem;
