"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
 
const FormSchema = z.object({
  username: z.boolean().default(false).optional(),
  mobile: z.boolean().default(false).optional(),
})
const ConfirmationBody = () => {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: true,
      mobile: true,
    },
  })

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        control={form.control}
        name="usernam"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md bg-gray-200 border p-4">
            <FormControl>
              <Checkbox className="mt-1 border-solid border-gray-800"
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-bold text-lg">
                I agree with sending an Marketing and newsletter emails. No spam, promissed!
              </FormLabel>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="mobile"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md bg-gray-200 border p-4">
            <FormControl>
              <Checkbox className="mt-1 border-solid border-gray-800"
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-bold text-lg">
                I agree with our terms and conditions and privacy policy.
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
)
}


export default ConfirmationBody;

