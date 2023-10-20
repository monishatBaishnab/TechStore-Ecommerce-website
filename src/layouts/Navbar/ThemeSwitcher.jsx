import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import PropTypes from 'prop-types';

const ThemeSwitcher = ({classList}) => {
    const [showLightIcon, setShowLightIcons] = useState(true);
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme);
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        setTheme(storedTheme);
    }, [])

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }

        localStorage.setItem('theme', theme);
    }, [theme])

    const toggleLightDark = () => {
        setShowLightIcons(!showLightIcon);
        setTheme(theme == 'light' ? 'dark' : 'light');
    }
    
    return (
        <button onClick={toggleLightDark} className={`bg-violet-500 w-10 h-10 items-center justify-center rounded-md text-white text-xl cursor-pointer ${classList}`}>
            {
                showLightIcon ? <MdOutlineLightMode /> : <CiDark />
            }
        </button>
    );
};

ThemeSwitcher.propTypes = {
    classList: PropTypes.string,
}

export default ThemeSwitcher;