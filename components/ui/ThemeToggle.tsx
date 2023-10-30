"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  
  return (
    <button className="block w-10 h-6 p-1 bg-white dark:bg-black  dark:ring-white rounded-full" onClick={()=>{ resolvedTheme === 'light' ? setTheme('dark'): setTheme('light') }}>
          { resolvedTheme === "light" 
            ? <MoonIcon  className="scale-[1.5] rotate-90 dark:scale-0" />
            : <SunIcon className="scale-[1.5] float-right dark:scale-100" />  }
          
          <span className="sr-only">Toggle theme</span>
        </button>
  )
}


          