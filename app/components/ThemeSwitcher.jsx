"use client";

import {useTheme} from "next-themes";
import {Button} from '@nextui-org/button'; 
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if(!mounted) return null

  return (
    <div>
      <Button onClick={() => changeTheme()}>{theme==='light' ? "Dark Mode" : "Light Mode"}</Button>
    </div>
  )
};