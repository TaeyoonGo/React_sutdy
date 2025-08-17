import {createContext, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
