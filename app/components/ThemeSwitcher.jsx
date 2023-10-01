"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div>
      <div className="p-2 rounded-lg bg-blue-500" onClick={() => changeTheme()}>
        {theme === "light" ? (
          <MdDarkMode
            size={24}
            className={`${
              theme === "light" ? "text-slate-800" : "text-slate-100"
            }`}
          />
        ) : (
          <BsSunFill
            className={`${
              theme === "light" ? "text-slate-800" : "text-slate-100"
            }`}
            size={24}
          />
        )}
      </div>
    </div>
  );
}
