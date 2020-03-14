import React, { useState, createContext } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = props => {
    const [isDarkMode, toggle] = useState(false)

    const toggleTheme = () => {
        toggle(!isDarkMode)
    }
    return (
        <ThemeContext.Provider
            value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}