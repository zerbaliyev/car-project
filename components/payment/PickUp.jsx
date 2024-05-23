"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image from "next/image"
import DropOff from "./DropOff"
  
  
const FormSchema = z.object({
    locations: z.string({
      required_error: "Please select an locations to display.",
    }),
    date: z.string({
      required_error: "Please select an date to display.",
    }),
    time: z.string({
      required_error: "Please select an time to display.",
    }),
  });

const PickUp = () => {

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <section className='bg-white rounded w-3/5 px-6 py-6 pt-6'>
      <div className='flex justify-between'>
        <div>
          <h2 className='font-bold text-xl'>Rental Info</h2>
          <span className=' text-gray-500 text-base'>Please select your rental date</span>
        </div>
          <p>Step 2 of 4</p>
      </div>
      <div className="flex gap-2 py-6">
        <Image className="" 
        src="/imgs/icons/ellipse-1.svg" 
        width={15}
        height={1}
        alt="" />
        Pick - Up
      </div>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="locations"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Locations</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=" bg-gray-200 p-6">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Baku">Baku</SelectItem>
                  <SelectItem value="Abseron">Abseron</SelectItem>
                  <SelectItem value="Gence">Gence</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Date</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=" bg-gray-200 p-6">
                    <SelectValue placeholder="Select your date" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="2005">2005</SelectItem>
                  <SelectItem value="2000">2000</SelectItem>
                  <SelectItem value="1990">1990</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=" bg-gray-200 p-6">
                    <SelectValue placeholder="Select your time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="08:00">08:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="20:00">20:00</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
    <DropOff />
    </section>
  )
}

export default PickUp;


 