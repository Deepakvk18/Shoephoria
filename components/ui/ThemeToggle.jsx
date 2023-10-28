"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    console.log(resolvedTheme);
  }, [resolvedTheme])
  
  return (
    <button className="block w-8 h-5 ring-1 p-1 ring-black dark:ring-white rounded-full" onClick={()=>{ resolvedTheme === 'light' ? setTheme('dark'): setTheme('light') }}>
          { resolvedTheme === "light" 
            ? <MoonIcon className=" rotate-90 dark:scale-0" />
            : <SunIcon className="float-right dark:scale-100" />  }
          
          <span className="sr-only">Toggle theme</span>
        </button>
  )
}


          