"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const SignUpForm = () => {

    const signUpSchema =  z.object({
        email: z.string().email(),
        password: z.string().min(8),
        confirmPassword: z.string().min(8),
    })

    const signUpForm = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

  return (
    <div className="flex">
        <Form {...signUpForm}>
        <form onSubmit={()=>{}} className="space-y-8">
            <FormField
            control={signUpForm.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input className="" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={signUpForm.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input className="w-full md:min-w-[300px]" placeholder="Enter your Password" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={signUpForm.control}
            name="confirmPassword"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button className="bg-red-600 text-white" type="submit">Sign Up</Button>
        </form>
        </Form>
    </div>
  )
}

export default SignUpForm