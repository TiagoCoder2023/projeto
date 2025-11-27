import { useState, createContext, useEffect } from 'react';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import Links from './components/Links';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './index.css';

export const ThemeContext = createContext();

function App() {
    const [isLightMode, setIsLightMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'light' : false;
    });

    useEffect(() => {
        const html = document.documentElement;
        if (isLightMode) {
            html.classList.add('light');
        } else {
            html.classList.remove('light');
        }
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    }, [isLightMode]);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
            <div className={`container ${isLightMode ? 'light' : ''}`}>
                <Profile />
                <ThemeToggle />
                <Links />
                <SocialLinks />
                <Portfolio />
                <Resume />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;

