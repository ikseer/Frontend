'use client'
import React from 'react'
import { useTheme } from 'next-themes'

// Theme icons
import DarkModeIcon from '@mui/icons-material/DarkMode'; // dark theme
import WbSunnyIcon from '@mui/icons-material/WbSunny';  // light theme

const SwitchMode = () => {
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === 'system'? systemTheme: theme

  return (
    <div>
      <button onClick ={() => theme === 'dark'? setTheme('light'): setTheme('dark')}>
        {theme ==='dark' ? <WbSunnyIcon />: <DarkModeIcon /> }
      </button>
    </div>
  )
}
export default SwitchMode
