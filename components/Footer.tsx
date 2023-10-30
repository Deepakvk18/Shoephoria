
import links, { footerLinks, types, help } from "@/helper/links";
import { Button } from "./ui/button";
import Image from "next/image";
import { logo } from "../public"
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => { 


  return (
    <footer className="flex flex-col bottom-0 px-4 pt-4 md:px-10 md:pt-10 w-full border-t-2 bg-neutral-800 justify-center text-white">
        <div className="flex w-full flex-wrap justify-center text-center text-white items-center">
            <div className="flex flex-row md:w-[40%] items-center">
                <Image
                    src={logo}
                    alt="logo" 
                    height={80}
                    className="cursor-pointer mr-10 object-contain hover:opacity-80 transition duration-250 ease-in-out"
                /> 
                <div className="flex flex-col my-4 text-start">
                     <h1 className="text-4xl font-bold font-ubuntu_mono">ShoePhoria </h1>
                     <h3 className="text-sm text-foreground font-montserrat text-gray-400">Shoes for Every Occasion, Every Style</h3>
                </div>
            </div>
            <div className="md:w-[60%] my-4 float-right">
                <h2 className="mb-1 text-2xl font-semibold font-poppins">
                    Subscribe to our newsletter
                </h2>
                <p className="my-1 text-foreground text-wrap text-gray-400 font-montserrat">
                    Stay updated on New releases, sales and more.
                    Subscribe today,and get exclusive offers right away!
                </p>
                <input 
                    type="text" 
                    placeholder="your-email@domain.com"
                    className="py-2 my-1 mx-4 px-4 rounded-lg h-10 w-[80%] sm:w-[40%] max-w-sm border-black text-black dark:text-white"
                />
                <Button
                    className="bg-black text-white dark:bg-white dark:text-black"
                >
                    Subscribe
                </Button>
            </div>
        </div>    
        <div className="flex flex-wrap my-6 justify-between">
            <div className="flex flex-col justify-start min-w-[250px]">
                <h3 className="font-titillium_web font-semibold text-lg my-2">SHOP NOW</h3>
                { Object.keys(links).map((key: string, index) => (
                        <Link className="hover:opacity-80 text-sm text-gray-400 font-montserrat" key={index} href={links[key]}>
                            { key }
                        </Link>
                    )) }
            </div>
            <div className="flex flex-col justify-start min-w-[250px]">
                <h2 className="font-titillium_web font-semibold text-lg my-2">SHOP FOR</h2>
                { Object.keys(types).map((key: string, index) => (
                    <Link className="hover:opacity-80 text-sm text-gray-400 font-montserrat" key={index} href={types[key]}>
                        { key }
                    </Link>
                )) }
            </div>
            <div className="flex flex-col justify-start min-w-[250px]">
                <h3 className="font-titillium_web font-semibold text-lg my-2"> GET HELP </h3>
                { Object.keys(help).map((key: string, index) => (
                    <Link className="hover:opacity-80 text-sm text-gray-400 font-montserrat" key={index} href={help[key]}>
                        { key }
                    </Link>
                )) }
            </div>
            <div className="flex flex-col justify-start min-w-[250px]">
                <h3 className="font-titillium_web font-semibold text-lg my-2"> KNOW US </h3>
                { Object.keys(footerLinks).map((key: string, index) => (
                    <Link className="hover:opacity-80 text-sm text-gray-400 font-montserrat" key={index} href={footerLinks[key]}>
                        { key }
                    </Link>
                )) }
            </div>
            <div className='flex flex-row my-6 justify-between min-w-[250px]'>
                <Link href={''} className="mr-1 flex rounded-full p-2 h-12 justify-center items-center w-12 bg-black">
                    <Instagram/>
                </Link>
                <Link href={''} className="mx-1 flex rounded-full p-2 h-12 justify-center items-center w-12 bg-black">
                    <Facebook />
                </Link>
                <Link href={''} className="mx-1 flex rounded-full p-2 h-12 justify-center items-center w-12 bg-black">
                    <Youtube />
                </Link>
                <Link href={''} className="ml-1 flex rounded-full p-2 h-12 justify-center items-center w-12 bg-black">
                    <Twitter />
                </Link>
            </div>
        </div>
        <p className="bottom-0 text-left my-10">
            @ 2023 Shoephoria LLC
        </p>
    </footer>
  )
}

export default Footer