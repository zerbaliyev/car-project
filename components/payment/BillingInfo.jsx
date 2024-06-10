"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { 
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, } from '../ui/form'
import { Input } from '../ui/input'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(3, {
    message: "Phone must be at least 3 characters.",
  }),
  address: z.string().min(4, {
    message: "Address must be at least 4 characters.",
  }),
  townCity: z.string().min(5, {
    message: "townCity must be at least 5 characters.",
  }),
});

const BillingInfo = () => {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      phone: "",
      address: "",
      townCity: "",
    },
  })

  function onSubmit(data) {
    console.log(data);
  }



  return (
    <section className='bg-white rounded lg:w-3/5  px-6 py-6 pt-6'>
      <div className='flex justify-between'>
        <div>
          <h2 className='font-bold text-xl'>Billing Info</h2>
          <span className=' text-gray-500 text-base'>Please enter your billing info</span>
        </div>
        <p>Step 1 of 4</p>
      </div>

        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">Name</FormLabel>
                <FormControl>
                  <Input className=" bg-gray-200 p-6" placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">Phone Number</FormLabel>
                <FormControl>
                  <Input className=" bg-gray-200 p-6" placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">Address</FormLabel>
                <FormControl>
                  <Input className=" bg-gray-200 p-6" placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="townCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">Town/City</FormLabel>
                <FormControl>
                  <Input className=" bg-gray-200 p-6" placeholder="town" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  )
}

export default BillingInfo;
