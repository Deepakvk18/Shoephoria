"use client"

import Image from "next/image"
import { logo } from "../public"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { useState } from "react"
import { ModeToggle } from "./ui/ThemeToggle"
import { Search } from "lucide-react"
import { Menu, XCircle } from "lucide-react"
import links from '@/helper/links'

const NavBar = () => {
    const router = useRouter()
    const login = false;
    const [showNav, setShowNav] = useState(false)

  return (
    <nav className="flex px-4 md:px-10 w-full py-2 placeholder:text-xs border-b-2 border-gray-100 dark:border-zinc-900 items-center">
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
                    className="relative h-10 w-full border-0 bg-slate-200 focus:border-violet-400 font-lato dark:bg-zinc-900 rounded-md focus:border-1 placeholder:font-ubuntu placeholder:italic placeholder:text-xs md:placeholder:text-sm border-black p-3 pl-10 pr-4 mx-4"
                    type="text" 
                    placeholder="Search for our products"
                />
                <Search 
                    className="absolute inset-y-0 top-2 left-6 cursor-pointer" 
                    onClick={()=> document.getElementById('search')?.focus()}
                    strokeWidth={1.5}
                />
                <div className="hidden md:flex">
                    <ModeToggle/>
                </div>
            </div>

            { login 
                ? <div>

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
            <Menu onClick={()=>setShowNav((prev)=>!prev)}/>
            { showNav 
                && <div className="absolute top-16 right-0 bg-slate-400 dark:bg-black  block w-full sm:w-[30%]">
                    <div className="flex-row justify-end text-end my-10 test-center">
                        <h2 className="text-2xl mr-4 md:mr-10 font-bold">
                            Menu
                        </h2>
                        { Object.keys(links).map((key: string, index) => (
                            <Link className="block my-4 mr-4 md:mr-10 text-xl" key={index} href={links[key]}>
                                { key }
                            </Link>
                        )) }
                    </div>
                    <div className="flex float-right mb-8 w-full items-center justify-around">
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
                    </div>
                </div> }
        </div>
    </nav>
  )
}

export default NavBar