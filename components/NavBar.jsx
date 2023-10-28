"use client"

import Image from "next/image"
import { logo } from "@/public"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Button from "./ui/MyButton"
import { useState } from "react"
import { ModeToggle } from "./ui/ThemeToggle"

const NavBar = () => {
    const router = useRouter()
    const login = false;

    const [isLoginButtonLoading, setIsLoginButtonLoading] = useState(false)
    const [isRegisterButtonLoading, setIsRegisterButtonLoading] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id === "login") {
            setIsLoginButtonLoading(true)
            setTimeout(() => {
                setIsLoginButtonLoading(false)
            }, 2000)
            router.push("/login")
        } else {
            setIsRegisterButtonLoading(true)
            setTimeout(() => {
                setIsRegisterButtonLoading(false)
            }, 2000)
            router.push("/register")
        }   
    }

  return (
    <div className="relative flex px-10 w-full h-20 border-b-2 items-center">
        <div className="h-full">
            <Image
                src={logo}
                alt="logo" 
                width={150} 
                className="cursor-pointer object-contain hover:opacity-80 transition duration-300 ease-in-out"
                onClick={() => router.push("/")}
            />
        </div>
        <div className="flex h-full text-black font-semibold w-full justify-around items-center">
            <Link href={'/home'}> Home </Link> 
            <Link href={'/best-selling'}> Best Selling </Link> 
            <Link href={'/men'}> Men </Link> 
            <Link href={'/women'}> Women </Link> 
            <Link href={'/kids'}> Kids </Link> 
            <Link href={'/about'}> About </Link> 
        </div>
        <div className="flex h-full w-full items-center justify-around">
            <div className="flex w-full">
                <input 
                    className="h-9 font-lato w-full rounded-sm border-2 placeholder:font-ubuntu border-black px-2 mr-2"
                    type="text" 
                    placeholder="Search for our products"
                />
            </div>

        <div className="items-center">
            <ModeToggle />
        </div>

            { login 
                ? <div>

                </div>             
                : <div className="flex float-right h-full w-full  items-center right-10 justify-between">
                    <div className="w-[100%] mx-4">
                        <Button 
                            id='login'
                            className="m-4"
                            buttonText="Login"
                            onClick={handleClick}
                            isLoading={isLoginButtonLoading}
                            textSize={'sm'}
                            // variant={'nocolor'}
                        />
                    </div>
                    <div className="w-[100%]">
                        <Button 
                            id='sign-up'
                            className="m-4"
                            buttonText="Sign Up"
                            onClick={handleClick}
                            isLoading={isRegisterButtonLoading}
                            textSize={'sm'}
                        />
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default NavBar