import SignUpForm from "@/components/SignUpForm"
import { logo } from "@/public"
import Image from "next/image"

const SignUp = () => {


  return (
    <div className='flex w-full'>
        <div className='flex flex-col w-full bg-zinc-200 dark:bg-zinc-800 md:w-1/2 lg:w-1/3 justify-center items-center min-h-screen'>
                <Image
                    src={logo}
                    alt="logo"
                    height={80}
                    className="object-contain"
                /> 
                <div className="flex flex-col my-4 text-center">
                    <h1 className="text-4xl font-bold font-ubuntu_mono">ShoePhoria </h1>
                    <h3 className="text-sm text-foreground font-montserrat text-gray-400">Shoes for Every Occasion, Every Style</h3>
                </div>
            <SignUpForm />
        </div>
        <div className='hidden md:flex md:w-1/2'>

        </div>
    </div>
  )
}

export default SignUp