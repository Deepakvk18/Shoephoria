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
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Facebook } from "lucide-react"

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
            <div className="flex flex-col w-full justify-between items-center">
                
                <Button className="w-full" type="submit">Signup with Email</Button>

                <div className="flex my-5 w-full justify-between text-white font-lato">
                    <Button className="py-2 bg-red-600 w-1/2 mx-1 text-white" variant={'secondary'}> 
                        <Image 
                            src='/googleIcon.png' 
                            alt='google' 
                            width={24}
                            height={24}
                        />
                        <span className="mx-2">Google</span>
                    </Button>
                    <Button className="py-2 w-1/2 bg-[#0866ff] mx-1" variant={'ghost'}> 
                        <Facebook className="scale-125" fill='white' strokeWidth={0}/>
                        <span className="mx-2">Facebook</span>
                    </Button>
                </div>
            </div>
        </form>
            
        </Form>
    </div>
  )
}

export default SignUpForm