import { useState, useEffect } from 'react'
import './theme.css'

function ThemeSwitcher() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

    let themeLink = document.getElementById('app-theme');

    if (themeLink) {
        themeLink.href = 'styles/' + theme + '.css';
    }

    return (
        <div className='theme-button'>
            <button id='theme-button'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                Change Theme
            </button>
        </div>
    )
}

export default ThemeSwitcher