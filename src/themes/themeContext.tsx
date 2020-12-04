import { createContext, useContext } from 'react'

export type ThemeContextType = {
    theme: String,
    setTheme: (Theme:any) => void
}

export const ThemeContext = createContext<ThemeContextType>({ theme: '', setTheme: Theme => Theme})
export const useTheme = () => useContext(ThemeContext)