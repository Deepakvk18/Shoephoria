"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  
  return (
    <button className="block w-12 h-6 mx-2 bg-zinc-200 dark:bg-zinc-800 rounded-full items-center" onClick={()=>{ resolvedTheme === 'light' ? setTheme('dark'): setTheme('light') }}>
          { resolvedTheme === "light" 
            ? <MoonIcon strokeWidth={1} fill="true" className="rounded-full p-1 bg-white dark:scale-0" />
            : <SunIcon strokeWidth={2} fill="true" className="dark:scale-100 p-1 float-right  bg-darkBg rounded-full" />  }
          
          <span className="sr-only">Toggle theme</span>
        </button>
  )
}


          