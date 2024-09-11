'use client'

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState()
    const currentTheme = theme === 'system' ? systemTheme : theme
    useEffect(() => setMounted(true), [])
    return (
        <div>
            {mounted && (
                currentTheme === 'dark' ? <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('light')} /> : <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('dark')} />
            )}
        </div>
    )
}
