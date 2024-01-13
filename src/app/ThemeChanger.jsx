"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className=" cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsFillSunFill size={25} />
      ) : (
        <BsFillMoonStarsFill size={25} />
      )}
    </div>
  );
};

export default ThemeChanger;