"use client";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Props = {};

function ToggleThemeButton({}: Props) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const html = document.querySelector("html");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    if (html) {
      html.classList.toggle("dark");
    }
  };
  return (
    <div className="cursor-pointer" onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <FaMoon size={30} className=" text-dark-lightGrayishBlueHover" />
      ) : (
        <FaSun size={30} className=" text-dark-lightGrayishBlueHover" />
      )}
    </div>
  );
}

export default ToggleThemeButton;
