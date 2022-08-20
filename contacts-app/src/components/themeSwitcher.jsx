import { useState } from 'react'

function ThemeSwitcher() {

    const [theme, setTheme] = useState('dark')

    let themeLink = document.getElementById('app-theme');

    if (themeLink) {
        themeLink.href = 'styles/' + theme + '.css';
    }

    return (
        <div className='theme-button'>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                Change Theme
            </button>
        </div>
    )
}

export default ThemeSwitcher