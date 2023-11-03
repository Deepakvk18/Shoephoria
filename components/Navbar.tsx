"use client"

import Image from "next/image"
import { logo } from "../public"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { ModeToggle } from "./ui/ThemeToggle"
import { Search } from "lucide-react"
import { Menu, ShoppingCart, Heart, UserCircle, Home } from "lucide-react"
import links from '@/lib/helper/links'


const NavBar = () => {
    const router = useRouter()
    const login = false;
    const [showNav, setShowNav] = useState(false)
    const [cart, setCart] = useState(false)
    const [wishList, setWishList] = useState(false)


  return (
    <nav className="fixed top-0 left-0 flex px-4 md:px-10 w-full py-2 placeholder:text-xs border-b-2 bg-white dark:bg-darkBg items-center z-50">
        <div className="flex h-full lg:w-1/2 items-center">
            <div className="flex h-full">
                <Image
                    src={logo}
                    alt="logo" 
                    height={50}
                    className="cursor-pointer  object-contain hover:opacity-80 transition duration-300 ease-in-out"
                    onClick={() => router.push("/")}
                />
            </div>
            <div className="hidden lg:flex h-full font-montserrat text-sm text-zinc-800 dark:text-zinc-400 w-full justify-around items-center">
                { Object.keys(links).map((key: string, index) => (
                    <Link className="hover:opacity-80" key={index} href={links[key]}>
                        { key }
                    </Link>
                )) }
            </div>
        </div>
        <div className="flex h-full w-full lg:w-1/2 items-center">
            <div className="relative flex w-full items-center">
                <input 
                    id="search"
                    className="relative h-10 w-full bg-slate-200 font-lato dark:bg-zinc-900 rounded-md focus:border-1 placeholder:font-ubuntu placeholder:italic placeholder:text-xs md:placeholder:text-sm border-black p-3 pl-10 pr-4 mx-4"
                    type="text" 
                    placeholder="Search for our products"
                />
                <Search 
                    className="absolute inset-y-0 top-2 left-6 cursor-pointer" 
                    onClick={()=> document.getElementById('search')?.focus()}
                    strokeWidth={1.5}
                />
                <div className="">
                    <ModeToggle/>
                </div>
            </div>

            { login 
                ? <div className="relative hidden md:flex flex-row gap-4 justify-between">
                    <Heart className="cursor-pointer" size={24}/>
                    <div className="relative">
                        <ShoppingCart className="cursor-pointer" size={24}/>
                        <div className={`absolute top-0 right-0 rounded-full w-3 h-3 bg-red-300 justify-center text-center items-center`}>
                        <span className="text-white text-[8px]">1</span>
                    </div>
                    </div>
                    
                    <UserCircle className="cursor-pointer" size={24}/>
                </div>             
                : <div className="hidden lg:flex h-full items-center mx-4">
                    <Button     
                        className="mr-4"
                        onClick={()=>{ router.push("/login") }} 
                        variant={"ghost"}   
                    > Login
                    </Button>
                    <Button     
                        onClick={()=>{ router.push("/signup") }}  
                        size={"sm"}
                    > Sign Up
                    </Button>
                </div>
            }
        </div>
        <div className="flex lg:hidden" >
            <Menu className="ml-4" onClick={()=>setShowNav((prev)=>!prev)} />
                 <div className={`absolute top-16 right-0 -mt-1 rounded-tl-xl rounded-bl-xl transition-transform will-change-transform origin-right duration-500 ${showNav ? '': 'scale-x-0' }  bg-slate-400 dark:bg-black block w-full sm:w-[40%] md:w-[30%]`}>
                    <div className="flex-row justify-end text-end my-10 test-center">
                        <h2 className="text-2xl border-b-2 pr-4 ml-32 sm:ml-20 md:mr-10 font-bold">
                            Menu
                        </h2>
                        { Object.keys(links).map((key: string, index) => (
                            <Link className="block py-4 pr-4 md:pr-10 text-xl hover:bg-opacity-80" key={index} href={links[key]}>
                                { key }
                            </Link>
                        )) }
                    </div>
                    {/* <div className="flex float-right mb-8 w-full items-center justify-around">
                        <ModeToggle/>
                        <Button     
                            className=""
                            onClick={()=>{ router.push("/login") }} 
                            variant={"outline"}   
                            
                        > Login
                        </Button>
                        <Button     
                            onClick={()=>{ router.push("/signup") }}  
                            size={"sm"}
                        > Sign Up
                        </Button>
                    </div> */}
                </div> 
        </div>
        <div className="inset-x-0 md:hidden fixed flex flex-row w-screen justify-around items-center bottom-0 bg-gray-100 rounded-md p-4 py-2 dark:bg-gray-700">
            <Home />
            <ShoppingCart />
            <Heart />
            <UserCircle />
        </div>
    </nav>
  )
}

export default NavBar