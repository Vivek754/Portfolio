import {MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md";
import {useEffect, useState} from "react";

export const ThemeSelector = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme("light");
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div onClick={toggleTheme} className={"cursor-pointer"}>
            {theme === "dark" ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
        </div>
    );
}
