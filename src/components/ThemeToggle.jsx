import { useContext } from 'react';
import { ThemeContext } from '../App';

function ThemeToggle() {
    const { isLightMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`switch ${isLightMode ? 'light' : ''}`} onClick={toggleTheme}>
            <button></button>
            <span></span>
        </div>
    );
}

export default ThemeToggle;

